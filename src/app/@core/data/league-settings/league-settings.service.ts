import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

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
  abstract getSettingsData(): Observable<Settings[]>;
}


@Injectable({
  providedIn: 'root',
})
export class LeagueSettingService {


  settingsCollection: AngularFirestoreCollection<Settings>;

  settings$: Observable<Settings[]>;
  leagueDoc: AngularFirestoreCollection<Settings>;

  constructor(private afs: AngularFirestore) {

   this.settingsCollection =  this.afs.collection<Settings>('leaguesettings');

  }


    getByLeague(league: string) {
      this.settingsCollection = this.afs.collection('leaguesettings', ref => {
        return ref.where('league', '==', league);
      });
      this.settingsCollection.valueChanges();
    }

    updateSettings(docId: string, season: string, week: string) {

      this.settingsCollection.doc('/' + docId)
        .update({
          season: season,
          week: week,
        });
      return console.warn('Update has been completed');

    }
}
