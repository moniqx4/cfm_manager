import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router'; // we also need angular router for Nebular to function properly

import { NgxEchartsModule } from 'ngx-echarts';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbLayoutModule,
  NbTabsetModule,
  NbUserModule,
  NbRadioModule,
  NbSelectModule,
  NbListModule,
  NbIconModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { CfmDashboardComponent } from './cfm-dashboard.component';
import { LeagueSettingsComponent } from './league-settings/league-settings.component';
import { CoachesComponent } from './coaches/coaches.component';

@NgModule({
    imports: [
      FormsModule,
      ReactiveFormsModule,
      ThemeModule,
      NbCardModule,
      NbUserModule,
      NbButtonModule,
      NbTabsetModule,
      NbActionsModule,
      NbRadioModule,
      NbSelectModule,
      NbLayoutModule,
      NbListModule,
      NbIconModule,
      NbButtonModule,
      NgxEchartsModule,
    ],
    declarations: [
        CfmDashboardComponent,
        LeagueSettingsComponent,
        CoachesComponent,
    ],
  })
  export class CfmDashboardModule { }
  