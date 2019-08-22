import { Component } from '@angular/core';
import { ArticlesService } from '../articles.service';
@Component({
    selector: 'listAllStudents',
    templateUrl: 'app/articles/listAllStudents/listAllStudents.template.html'
})
export class ListAllStudentsComponent {
    students: any;
    errorMessage: string;
    constructor(private _articlesService: ArticlesService) { }
    ngOnInit() {
        this._articlesService.listAllStudents().subscribe(students => this.students
            = students);
    }
}

