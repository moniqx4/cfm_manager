import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { AdvanceComponent } from './advance/advance.component';


NgModule({
  imports: [
    ThemeModule,
    NbMenuModule,

  ],
  declarations: [
    AdvanceComponent,
  ],
})

export class ComponentsModule { }


