import { Component } from '@angular/core';
import { VitalSignsService } from '../vitalsigns.service';
@Component({
    selector: 'list',
    templateUrl: 'app/vitalsigns/list/list.template.html'
})
export class ListComponent {
    articles: any;
    errorMessage: string;
    constructor(private _articlesService: VitalSignsService) { }
    ngOnInit() {
        this._articlesService.list().subscribe(articles => this.articles
            = articles);
    }

}

