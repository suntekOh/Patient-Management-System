import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmergencyAlertService } from '../emergencyalert.service';
@Component({
    selector: 'create',
    templateUrl: 'app/emergencyalert/create/create.template.html'
})
export class CreateComponent {
    article: any = {};
    patients: any;

    errorMessage: string;
    constructor(private _router: Router,
        private _articlesService: EmergencyAlertService) { }
    create() {
        this._articlesService
            .create(this.article)
            .subscribe(createdArticle => this._router.navigate(['/emergencyalert',
                createdArticle._id]),
            error => this.errorMessage = error);
    }

}
