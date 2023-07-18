import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { IpTrackerComponent } from './ip-tracker.component';
import { MapComponent } from 'src/app/components/map/map.component';
import { DetailsComponent } from '../details-component/details-component.';
import { HeaderComponent } from 'src/app/components/header/header.component';

@NgModule({
  declarations: [IpTrackerComponent, DetailsComponent,HeaderComponent, MapComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild([{ path: '', component: IpTrackerComponent }]),
  ],
  exports: [RouterModule],
})
export class IpTrackerModule {}
