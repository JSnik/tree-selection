import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { PopupComponent } from './popup/popup.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    CardComponent,
    PopupComponent
  ],
  exports: [
    CardComponent,
    PopupComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
