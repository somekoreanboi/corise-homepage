import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexSteelPlantComponent } from './index-steel-plant/index-steel-plant.component';


const routes: Routes = [
	{path: '', component: IndexSteelPlantComponent},
	{path: 'index-steel-plant', component: IndexSteelPlantComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
