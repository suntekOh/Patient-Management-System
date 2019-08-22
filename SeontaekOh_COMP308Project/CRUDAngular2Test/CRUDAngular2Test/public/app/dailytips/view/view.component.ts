import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../authentication/authentication.service';
import { DailyTipsService } from '../dailytips.service';
@Component({
    selector: 'view',
    templateUrl: 'app/dailytips/view/view.template.html',
})
export class ViewComponent {
    user: any;
    article: any;
    paramsObserver: any;
    errorMessage: string;
    allowEdit: boolean = false;
    @ViewChild('myVideo') myVideo: any;

    //
    constructor(private _router: Router,
        private _route: ActivatedRoute,
        private _authenticationService: AuthenticationService,
        private _articlesService: DailyTipsService) { }
    //
    ngOnInit() {
        this.user = this._authenticationService.user
        this.paramsObserver = this._route.params.subscribe(params => {
            let vitalsignsId = params['dailytipsId'];
            this._articlesService
                .read(vitalsignsId)
                .subscribe(
                article => {
                    this.article = article;
                    this.allowEdit = (this.user && this.user._id === this.
                        article.creator._id);
                },
                error => this._router.navigate(['/dailytips'])
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

    playVideo() {
        /**
         * You are accessing a dom element directly here,
         * so you need to call "nativeElement" first.
         */
        this.myVideo.nativeElement.play();
    }
}
