import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TemplateRoutingModule } from './template-routing.module';
import { BasicosComponent } from './basicos/basicos.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { SwitchesComponent } from './switches/switches.component';
import { customMinDirective } from './directivas/custom-min.directive';


@NgModule({
  declarations: [
    BasicosComponent,
    DinamicosComponent,
    SwitchesComponent,
    customMinDirective
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    FormsModule
  ]
})
export class TemplateModule { }
