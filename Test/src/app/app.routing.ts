import { RouterModule, Routes } from '@angular/router';
import {CatsComponent} from "./components/cats/cats.component";

const routes: Routes = [

  { path: '', component: CatsComponent},
  
];

export const routing = RouterModule.forRoot(routes);
