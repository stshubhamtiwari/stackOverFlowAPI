import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { ListingComponent } from './listing/listing.component';

const routes: Routes = [
  { path: '', component: ListingComponent },
  { path:'detailsView',component:DetailViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
