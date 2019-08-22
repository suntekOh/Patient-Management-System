import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EmergencyAlertRoutes } from './emergencyalert.routes';
import { EmergencyAlertComponent } from './emergencyalert.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(EmergencyAlertRoutes),
    ],
    declarations: [
        EmergencyAlertComponent,
        CreateComponent,
        ListComponent,
        ViewComponent,
        EditComponent,
    ]
})
export class EmergencyAlertModule { }
