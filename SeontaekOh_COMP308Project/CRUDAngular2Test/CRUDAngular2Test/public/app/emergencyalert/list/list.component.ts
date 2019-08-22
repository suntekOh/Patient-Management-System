import { Component } from '@angular/core';
import { EmergencyAlertService } from '../emergencyalert.service';
@Component({
    selector: 'list',
    templateUrl: 'app/emergencyalert/list/list.template.html'
})
export class ListComponent {
    articles: any;
    errorMessage: string;
    constructor(private _articlesService: EmergencyAlertService) { }
    ngOnInit() {
        this._articlesService.list().subscribe(articles => this.articles
            = articles);
    }

}

