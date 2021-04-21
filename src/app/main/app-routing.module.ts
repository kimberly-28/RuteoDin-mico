import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';
import { RouteTrackingComponent } from './route-tracking/route-tracking.component';
import { AssignRoutesComponent } from './assign-routes/assign-routes.component';
import { VentasComponent } from './ventas/ventas.component';

const routes: Routes = [
    {
        path:'assign-routes', component: AssignRoutesComponent
    },
    {
        path:'route-tracking', component: RouteTrackingComponent
    },
    {
        path:'ventas', component: VentasComponent
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
