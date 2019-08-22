import { Component } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { ML4HepatitisService } from '../ml4hepatitis.service';
@Component({
    selector: 'create',
    templateUrl: 'app/ml4hepatitis/create/create.template.html'
})
export class CreateComponent {
    article: any = {};
    patients: any;
    result: {};

    errorMessage: string;
    constructor(private _router: Router,
        private _route: ActivatedRoute,
        private _articlesService: ML4HepatitisService) { }
    create() {
        this._articlesService
            .create(this.article)
            .subscribe(createdArticle => {
                let navigationExtras: NavigationExtras = {
                    queryParams: {
                        "bundle": JSON.stringify(createdArticle)
                    }
                };

                this._router.navigate(["/ml4hepatitis/view"], navigationExtras)

                //this._router.navigate(['/ml4hepatitis/view'])
                //this._router.navigate(['/ml4hepatitis/view', navigationExtras]);
                //this._router.navigate(['/ml4hepatitis/view'
                //    , {
                //        probability4die: createdArticle.probability4die
                //        , probability4live: createdArticle.probability4live
                //    }]);
                //this.router.navigate(['/heroes', { id: heroId, foo: 'foo' }]);
                //this._router.navigate(['/view', {
                //    probability4die: createdArticle.probability4die
                //    , probability4live: createdArticle.probability4live
                //}])
            },
            error => this.errorMessage = error);
    }

}
