import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ML4HepatitisRoutes } from './ml4hepatitis.routes';
import { ML4HepatitisComponent } from './ml4hepatitis.component';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(ML4HepatitisRoutes),
    ],
    declarations: [
        ML4HepatitisComponent,
        CreateComponent,
        ViewComponent,
    ]
})
export class ML4HepatitisModule { }
