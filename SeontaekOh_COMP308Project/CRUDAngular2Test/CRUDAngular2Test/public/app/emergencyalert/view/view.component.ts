import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../authentication/authentication.service';
import { EmergencyAlertService } from '../emergencyalert.service';
@Component({
    selector: 'view',
    templateUrl: 'app/emergencyalert/view/view.template.html',
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
        private _articlesService: EmergencyAlertService) { }
    //
    ngOnInit() {
        this.user = this._authenticationService.user
        this.paramsObserver = this._route.params.subscribe(params => {
            let vitalsignsId = params['emergencyalertId'];
            this._articlesService
                .read(vitalsignsId)
                .subscribe(
                article => {
                    this.article = article;
                    this.allowEdit = (this.user && this.user.sort === 'N');
                },
                error => this._router.navigate(['/emergencyalert'])
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
