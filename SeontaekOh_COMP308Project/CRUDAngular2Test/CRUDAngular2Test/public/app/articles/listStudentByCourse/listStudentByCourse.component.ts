import { Component } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { Router } from '@angular/router';
@Component({
    selector: 'listStudentByCourse',
    templateUrl: 'app/articles/listStudentByCourse/listStudentByCourse.template.html'
})
export class ListStudentByCourseComponent {
    articles: any;
    Argument: any = {};
    errorMessage: string;
    constructor(private _router: Router,
        private _articlesService: ArticlesService) { }
    search() {
        this._articlesService
            .search(this.Argument.courseCode)
            .subscribe(articles => this.articles
                = articles, error => this.errorMessage = error);

    }


}

