import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../authentication/authentication.service';
import { VitalSignsService } from '../vitalsigns.service';
@Component({
    selector: 'view',
    templateUrl: 'app/vitalsigns/view/view.template.html',
})
export class ViewComponent {
    user: any;
    article: any;
    paramsObserver: any;
    errorMessage: string;
    allowEdit: boolean = false;
    //
    constructor(private _router: Router,
        private _route: ActivatedRoute,
        private _authenticationService: AuthenticationService,
        private _articlesService: VitalSignsService) { }
    //
    ngOnInit() {
        this.user = this._authenticationService.user
        this.paramsObserver = this._route.params.subscribe(params => {
            let vitalsignsId = params['vitalsignsId'];
            this._articlesService
                .read(vitalsignsId)
                .subscribe(
                article => {
                    this.article = article;
                    this.allowEdit = (this.user && this.user._id === this.
                        article.taker._id);
                },
                error => this._router.navigate(['/vitalsigns'])
                );
        });
    }
    //
    ngOnDestroy() {
        this.paramsObserver.unsubscribe();
    }
    //
    delete() {
        this._articlesService.delete(this.article._id).
            subscribe(deletedArticle => this._router.navigate(['']),
            error => this.errorMessage = error);
    }
}
