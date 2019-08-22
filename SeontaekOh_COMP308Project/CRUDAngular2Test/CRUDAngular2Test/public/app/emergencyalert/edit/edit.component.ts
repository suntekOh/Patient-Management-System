import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmergencyAlertService } from '../emergencyalert.service';
@Component({
    selector: 'edit',
    templateUrl: 'app/emergencyalert/edit/edit.template.html'
})
export class EditComponent {
    article: any = {};
    nurses: any;
    errorMessage: string;
    paramsObserver: any;
    constructor(private _router: Router,
        private _route: ActivatedRoute,
        private _articlesService: EmergencyAlertService) { }
    ngOnInit() {

        this.paramsObserver = this._route.params.subscribe(params => {
            let articleId = params['emergencyalertId'];
            this._articlesService.read(articleId).subscribe(article => {
                this.article = article;
                this._articlesService
                    .list4nurses()
                    .subscribe(nurses => { this.nurses = nurses;}, error => this._router.navigate(['/emergencyalert']) );

            },
                error => this._router.navigate(['/emergencyalert']));
        });
    }
    ngOnDestroy() {
        this.paramsObserver.unsubscribe();
    }
    update() {
        this._articlesService.update(this.article).subscribe(savedArticle => this._router.navigate(['/emergencyalert', savedArticle._id]),
            error => this.errorMessage =
                error);
    }
}