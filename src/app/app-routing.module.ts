import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IpTrackerComponent } from './core/presentation/ip-tracker/ip-tracker.component';

const routes: Routes = [
  { path: '', component: IpTrackerComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
