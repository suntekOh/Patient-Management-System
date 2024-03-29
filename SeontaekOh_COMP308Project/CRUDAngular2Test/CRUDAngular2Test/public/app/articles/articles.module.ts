﻿import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ArticlesRoutes } from './articles.routes';
import { ArticlesComponent } from './articles.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { ListStudentByCourseComponent } from './listStudentByCourse/listStudentByCourse.component';
import { ListAllStudentsComponent } from './listAllStudents/listAllStudents.component';
import { ListAllCoursesComponent } from './listAllCourses/listAllCourses.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(ArticlesRoutes),
    ],
    declarations: [
        ArticlesComponent,
        CreateComponent,
        ListComponent,
        ViewComponent,
        EditComponent,
        ListStudentByCourseComponent,
        ListAllStudentsComponent,
        ListAllCoursesComponent

    ]
})
export class ArticlesModule { }
