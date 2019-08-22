import { Routes } from '@angular/router';
import { ML4HepatitisComponent } from './ml4hepatitis.component';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';

export const ML4HepatitisRoutes: Routes = [{
    path: 'ml4hepatitis',
    component: ML4HepatitisComponent,
    children: [
        { path: 'create', component: CreateComponent },
        { path: 'view', component: ViewComponent },
    ],
}];