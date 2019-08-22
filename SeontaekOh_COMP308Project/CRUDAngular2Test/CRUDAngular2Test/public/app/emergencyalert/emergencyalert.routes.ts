import { Routes } from '@angular/router';
import { EmergencyAlertComponent } from './emergencyalert.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';

export const EmergencyAlertRoutes: Routes = [{
    path: 'emergencyalert',
    component: EmergencyAlertComponent,
    children: [
        { path: '', component: ListComponent },
        { path: 'create', component: CreateComponent },
        { path: ':emergencyalertId', component: ViewComponent },
        { path: ':emergencyalertId/edit', component: EditComponent }
    ],
}];