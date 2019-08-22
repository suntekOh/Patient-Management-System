import { Routes } from '@angular/router';
import { DailyTipsComponent } from './dailytips.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';

export const DailyTipsRoutes: Routes = [{
    path: 'dailytips',
    component: DailyTipsComponent,
    children: [
        { path: '', component: ListComponent },
        { path: 'create', component: CreateComponent },
        { path: ':dailytipsId', component: ViewComponent },
        { path: ':dailytipsId/edit', component: EditComponent }
    ],
}];