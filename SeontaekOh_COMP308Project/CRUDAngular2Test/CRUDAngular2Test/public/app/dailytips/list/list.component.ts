import { Component } from '@angular/core';
import { DailyTipsService } from '../dailytips.service';
@Component({
    selector: 'list',
    templateUrl: 'app/dailytips/list/list.template.html'
})
export class ListComponent {
    articles: any;
    errorMessage: string;
    constructor(private _articlesService: DailyTipsService) { }
    ngOnInit() {
        this._articlesService.list().subscribe(articles => this.articles
            = articles);
    }

}

