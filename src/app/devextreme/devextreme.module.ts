import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
   DxFormModule,
   DxDateBoxModule,
   DxTextAreaModule,
   DxTextBoxModule,
   DxSelectBoxModule,
   DxNumberBoxModule

} from 'devextreme-angular'


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DxFormModule,
    DxDateBoxModule,
    DxTextAreaModule,
    DxTextBoxModule,
    DxSelectBoxModule,
    DxNumberBoxModule
  ],
  exports: [
    DxFormModule,
    DxDateBoxModule,
    DxTextAreaModule,
    DxTextBoxModule,
    DxSelectBoxModule,
    DxNumberBoxModule
  ],
})
export class DevextremeModule { }
