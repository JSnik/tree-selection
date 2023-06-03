import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopupComponent implements OnInit{
  @Input() errors: boolean = false;
  // @ts-ignore
  form: FormGroup;
  // @ts-ignore
  @Output() cancel: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() editUser: EventEmitter<any> = new EventEmitter<any>();
  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.realizeForm();
  }

  realizeForm(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
    })
  }

  editUSer() {
    this.editUser.emit({name: this.form.value.name, surname: this.form.value.surname})
  }

  closePopup(): void {
    this.cancel.emit(false);
  }
}
