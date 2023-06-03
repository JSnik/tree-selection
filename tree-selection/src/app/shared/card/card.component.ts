import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {PeopleModel} from "../../models/people.model";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  // @ts-ignore
  @Input() person: PeopleModel;
  // @ts-ignore
  @Output() open: EventEmitter<boolean> = new EventEmitter<boolean>();

  openPopup(id: number) {
    this.open.emit(true);
    localStorage.setItem('id', JSON.stringify(id));
  }
}
