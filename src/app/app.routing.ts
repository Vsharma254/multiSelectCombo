import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { GamesComponent } from './game/games.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'games', component: GamesComponent}
];

export const routing = RouterModule.forRoot(routes);
