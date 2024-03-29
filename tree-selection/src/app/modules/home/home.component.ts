import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {FilialesService} from "../../services/filiales.service";
import {FilialeModel} from "../../models/filiale.model";
import {PeopleService} from "../../services/people.service";
import {PeopleModel} from "../../models/people.model";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, OnDestroy{
  searchIcon: string = 'data:image/jpeg;base64,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'
  destroy$: Subject<boolean> = new Subject<boolean>();
  filialesData: FilialeModel[] = [];
  peopleData: PeopleModel[] = [];
  // @ts-ignore
  choosenPerson: PeopleModel;
  isPopup: boolean = false;
  errors: boolean = false;
  // @ts-ignore
  constructor
  (
    private _filialesService: FilialesService,
    private _peopleService: PeopleService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.getFiliales();
    this.getPeople();
  }
  getFiliales(): void {
      this._filialesService.getFiliales()
        .pipe(takeUntil(this.destroy$))
        .subscribe(
          (data:FilialeModel[]) => {
            this.filialesData = [...data];
            this.filialesData.forEach((item: any) => {
              item.show = false;
            })
            this.cdr.markForCheck();
          }
        )
  }

  getPeople(): void {
    if (localStorage.getItem('people')) {
      let people: any = localStorage.getItem('people')
      this.peopleData = JSON.parse(people);
    } else {
      this._peopleService.getPeople()
        .pipe(takeUntil(this.destroy$))
        .subscribe(
          (data: PeopleModel[]) => {
            this.peopleData = [...data];
            this.cdr.markForCheck();
          }
        )
    }
  }

  showHideToggle(filialeName: any) {
    this.filialesData.forEach(i => {
      if (i === filialeName) {
        i.show = !i.show;
      } else {
        i.show = false;
      }
    });
  }

  displayPersonInfo(people: PeopleModel) {
    this.choosenPerson = people;
  }

  closePopup($event: boolean) {
    this.isPopup = $event;
    this.errors = false;
  }

  openPopup($event: boolean) {
    this.isPopup = $event;
  }

  editUser($event: any) {
    if ($event.name && $event.surname) {
      let idStr: any = localStorage.getItem('id');
      let id = JSON.parse(idStr);
      let newPeopleData: PeopleModel[] = [...this.peopleData];
      newPeopleData.find((item: PeopleModel) => {
        if (id === item.id) {
          item.name = $event.name ? $event.name : item.name;
          item.vorname = $event.surname ? $event.surname : item.vorname;
          this.choosenPerson.name = $event.name;
          this.choosenPerson.vorname = $event.surname;
          this.choosenPerson = {...this.choosenPerson};
        }
      })
      this.peopleData = [];
      this.peopleData = [...newPeopleData];
      localStorage.setItem('people', JSON.stringify(newPeopleData));
      this.errors = false;
      this.isPopup = false;
    } else {
      this.isPopup = true;
      this.errors = true;
    }
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
