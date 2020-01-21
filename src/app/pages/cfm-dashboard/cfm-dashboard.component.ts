import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators' ;


interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
}

@Component({
  selector: 'ngx-cfm-dashboard',
  templateUrl: './cfm-dashboard.component.html',
  styleUrls: ['./cfm-dashboard.component.scss']
})

export class CfmDashboardComponent implements OnDestroy {

  private alive = true;

  leagueSettingsCard: CardSettings = {
    title: 'League Settings',
    iconClass: 'nb-lightbulb',
    type: 'primary',
  };

  statusCards: string;

  commonStatusCardsSet: CardSettings[] = [
    this.leagueSettingsCard,
  ];

  statusCardsByThemes: {
    default: CardSettings[];
    cosmic: CardSettings[];
    corporate: CardSettings[];
    dark: CardSettings[];
  } = {
    default: this.commonStatusCardsSet,
    cosmic: this.commonStatusCardsSet,
    corporate: [
      {
        ...this.leagueSettingsCard,
        type: 'warning',
      },
    ],
    dark: this.commonStatusCardsSet,
  };

  constructor(private themeService: NbThemeService) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.statusCards = this.statusCardsByThemes[theme.name];
    });
  }

  ngOnDestroy() {
    this.alive = false;
  }

}
