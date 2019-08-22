import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../authentication/authentication.service';
import { ML4HepatitisService } from '../ml4hepatitis.service';
@Component({
    selector: 'view',
    templateUrl: 'app/ml4hepatitis/view/view.template.html',
})
export class ViewComponent {
    user: any;
    article: any;

    constructor(private _router: Router,
        private _route: ActivatedRoute,
        private _authenticationService: AuthenticationService,
        private _articlesService: ML4HepatitisService) { }

    ngOnInit() {
        this.user = this._authenticationService.user;
        this._route.queryParams.subscribe(params => {
            this.article = JSON.parse(params["bundle"]);
        });
    }


}
