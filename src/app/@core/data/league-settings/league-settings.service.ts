import { Injectable } from '@angular/core';
import { Observable, from, Subscribable } from 'rxjs';
import { map, tap,take,switchMap,mergeMap,expand,takeWhile } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection, Action, DocumentSnapshotExists, DocumentSnapshotDoesNotExist } from 'angularfire2/firestore';

import { SettingsData } from './setting';

import * as firebase from 'firebase/app';
import { settings } from 'cluster';


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

@Injectable({
  providedIn: 'root',
})
export class LeagueSettingService {


  settingsCollection: AngularFirestoreCollection<Settings>;

  settings$: Observable<Settings[]>;
  leagueDoc: AngularFirestoreCollection<Settings>;

  constructor(private afs: AngularFirestore) {



   this.settingsCollection =  this.afs.collection<Settings>('leaguesettings');

  //  this.settings$ = this.settingsCollection.snapshotChanges().pipe(actions => {
  //    return actions.map(action => {
  //      const data = action.payload.doc.data() as Settings;
  //      const id = action.payload.doc.id;
  //      return { id, ...data};
  //    });
  //  });
    

  }


    // getAllSettings() {
    //   return this.settings;
    // }

    // getMSPASettings() {
    //   this.settingsCollection = this.afs.collection('leaguesettings', ref => {
    //     return ref.where('league', '==', 'mspa');
    //   });
    //   this.settings$ = this.settingsCollection.valueChanges();
    // }

    // getSPCSettings() {
    //   this.settingsCollection = this.afs.collection('leaguesettings', ref => {
    //     return ref.where('league', '==', 'spc');
    //   });
    //   this.settings$ = this.settingsCollection.valueChanges();
    // }

    // getHMLSettings() {
    //   this.settingsCollection = this.afs.collection('leaguesettings', ref => {
    //     return ref.where('league', '==', 'hml');
    //   });
    //   this.settings$ = this.settingsCollection.valueChanges();
    // }

    // getCurrentWeek(week: string) {
    //   this.settingsCollection = this.afs.collection('leaguesettings', ref => {
    //     return ref.where('week', '==', week);
    //   });
    // }

    // getCurrentSeason(season: string) {
    //   this.settingsCollection = this.afs.collection('leaguesettings', ref => {
    //     return ref.where('season', '==', season);
    //   });
    // }

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
