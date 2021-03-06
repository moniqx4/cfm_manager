import { NgModule } from '@angular/core';
import { LeagueSettingService } from './league-settings.service';

/**
 * League Settings service module. Implements the logic for settings the league base settings in firestore.
 */
@NgModule({
    imports: [
        // DalModule
    ],
    exports: [],
    providers: [
        LeagueSettingService,
    ],
})

export class LeagueSettingsServiceModule {}
