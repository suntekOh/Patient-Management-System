import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DailyTipsService } from '../dailytips.service';
@Component({
    selector: 'create',
    templateUrl: 'app/dailytips/create/create.template.html'
})
export class CreateComponent {
    article: any = {};
    patients: any;

    errorMessage: string;
    constructor(private _router: Router,
        private _articlesService: DailyTipsService) { }
    create() {
        this._articlesService
            .create(this.article)
            .subscribe(createdArticle => this._router.navigate(['/dailytips',
                createdArticle._id]),
            error => this.errorMessage = error);
    }
    ngOnInit() {

        this._articlesService.list4patients().subscribe(patients => {
            this.patients = patients;
        }
        );
    }
}
