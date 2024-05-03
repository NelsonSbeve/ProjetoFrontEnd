import { Routes } from '@angular/router';
import { ProjetosComponent } from './projetos/projetos.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { ColaboratorsComponent } from './colaborators/colaborators.component';
import { GameComponent } from './game/game.component';
import { LittleGameComponent } from './little-game/little-game.component';


export const routes: Routes = [
  { path: 'projetos', component: ProjetosComponent },
  { path: 'colaborators', component: ColaboratorsComponent },
  { path: 'holidays', component: HolidaysComponent },
  { path: 'game', component: GameComponent },
  { path: 'game2', component: LittleGameComponent },

];
