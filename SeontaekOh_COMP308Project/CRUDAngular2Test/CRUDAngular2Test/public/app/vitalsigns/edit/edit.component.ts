import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { VitalSignsService } from '../vitalsigns.service';
@Component({
    selector: 'edit',
    templateUrl: 'app/vitalsigns/edit/edit.template.html'
})
export class EditComponent {
    article: any = {};
    patient: any;
    errorMessage: string;
    paramsObserver: any;
    constructor(private _router: Router,
        private _route: ActivatedRoute,
        private _articlesService: VitalSignsService) { }
    ngOnInit() {

        this.paramsObserver = this._route.params.subscribe(params => {
            let articleId = params['vitalsignsId'];
            this._articlesService.read(articleId).subscribe(article => {
                this.article = article;
                this.article.measuredDate = new Date(this.article.measuredDate).toISOString().split('T')[0];
            },
                error => this._router.navigate(['/vitalsigns']));
});
    }
    ngOnDestroy() {
        this.paramsObserver.unsubscribe();
    }
    update() {
        this._articlesService.update(this.article).subscribe(savedArticle => this._router.navigate(['/vitalsigns', savedArticle._id]),
            error => this.errorMessage =
                error);
    }
}