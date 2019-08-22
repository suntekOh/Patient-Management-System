import { Component } from '@angular/core';
import { ArticlesService } from '../articles.service';
@Component({
    selector: 'listAllCourses',
    templateUrl: 'app/articles/listAllCourses/listAllCourses.template.html'
})
export class ListAllCoursesComponent {
    articles: any;
    errorMessage: string;
    constructor(private _articlesService: ArticlesService) { }
    ngOnInit() {
        this._articlesService.listAllCourses().subscribe(articles => this.articles
            = articles);
    }
}
