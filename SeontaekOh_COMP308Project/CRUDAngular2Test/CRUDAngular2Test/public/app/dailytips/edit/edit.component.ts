import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DailyTipsService } from '../dailytips.service';
@Component({
    selector: 'edit',
    templateUrl: 'app/dailytips/edit/edit.template.html'
})
export class EditComponent {
    article: any = {};
    errorMessage: string;
    paramsObserver: any;
    constructor(private _router: Router,
        private _route: ActivatedRoute,
        private _articlesService: DailyTipsService) { }
    ngOnInit() {

        this.paramsObserver = this._route.params.subscribe(params => {
            let articleId = params['dailytipsId'];
            this._articlesService.read(articleId).subscribe(article => {
                this.article = article;

            },
                error => this._router.navigate(['/dailytips']));
        });
    }
    ngOnDestroy() {
        this.paramsObserver.unsubscribe();
    }
    update() {
        this._articlesService.update(this.article).subscribe(savedArticle => this._router.navigate(['/dailytips', savedArticle._id]),
            error => this.errorMessage =
                error);
    }
}