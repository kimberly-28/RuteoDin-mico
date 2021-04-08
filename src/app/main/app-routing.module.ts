import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';
import { RouteTrackingComponent } from './route-tracking/route-tracking.component';
import { AssignRoutesComponent } from './assign-routes/assign-routes.component';

const routes: Routes = [
    {
        path:'assign-routes', component: AssignRoutesComponent
    },
    {
        path:'route-tracking', component: RouteTrackingComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes),
        TranslateModule,
        FuseSharedModule],
    exports: [RouterModule]
  })


export class AppRoutingModule
{
}
