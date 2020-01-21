import { Observable } from 'rxjs';

export interface Settings {

    id?: string;
    awardSeason: string;
    season: string;
    week: string;
    league: string;
    ticker?: boolean;
    draftround?: string;
    week_title?: string;
    magUrl?: string;

}

export abstract class SettingsData {
    abstract updateSettings(): Observable<Settings[]>;
  }

