import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LeagueSettingService, Settings } from '../../../@core/data/league-settings/league-settings.service';


@Component({
  selector: 'ngx-league-settings',
  templateUrl: './league-settings.component.html',
  styleUrls: ['./league-settings.component.scss']
})
export class LeagueSettingsComponent implements OnInit {

  settingsForm: FormGroup;
  radioGroupValue = 'MSPA';
  settings: Settings;
  season: string;
  docId: string;

  constructor(private leagueSettingService: LeagueSettingService) { }

  ngOnInit() {


    this.settingsForm = new FormGroup ({

      leagueName: new FormControl(),
      season: new FormControl(),
      week: new FormControl(),

    });

  }

  save() {

    const season = this.settingsForm.value.season;
    const week = this.settingsForm.value.week;
    const league = this.settingsForm.value.leagueName;

    // console.log(this.settingsForm);
    // console.log(this.settingsForm.value.season);

    switch (league) {

      case 'SPC':
        this.docId = 'XztArN5uhgs2Tr7CblGm';
        break;
      case 'HML':
        this.docId = 'DmjYoYmQUzJjM5cTwYpb';
        break;
      case 'MSPA':
        this.docId = 'iKOwkix3VbJgaZdjPv9v';
        break;
      default:
          break;
    }


    this.leagueSettingService.updateSettings(this.docId, season, week);
  

  }

}
