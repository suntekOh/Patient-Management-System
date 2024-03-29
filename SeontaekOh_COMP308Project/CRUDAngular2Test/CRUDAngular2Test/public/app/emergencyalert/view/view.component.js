System.register(["@angular/core", "@angular/router", "../../authentication/authentication.service", "../emergencyalert.service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, router_1, authentication_service_1, emergencyalert_service_1, ViewComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (authentication_service_1_1) {
                authentication_service_1 = authentication_service_1_1;
            },
            function (emergencyalert_service_1_1) {
                emergencyalert_service_1 = emergencyalert_service_1_1;
            }
        ],
        execute: function () {
            ViewComponent = (function () {
                //
                function ViewComponent(_router, _route, _authenticationService, _articlesService) {
                    this._router = _router;
                    this._route = _route;
                    this._authenticationService = _authenticationService;
                    this._articlesService = _articlesService;
                    this.allowEdit = false;
                }
                //
                ViewComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.user = this._authenticationService.user;
                    this.paramsObserver = this._route.params.subscribe(function (params) {
                        var vitalsignsId = params['emergencyalertId'];
                        _this._articlesService
                            .read(vitalsignsId)
                            .subscribe(function (article) {
                            _this.article = article;
                            _this.allowEdit = (_this.user && _this.user.sort === 'N');
                        }, function (error) { return _this._router.navigate(['/emergencyalert']); });
                    });
                };
                //
                ViewComponent.prototype.ngOnDestroy = function () {
                    this.paramsObserver.unsubscribe();
                };
                //
                ViewComponent.prototype.delete = function () {
                    var _this = this;
                    this._articlesService.delete(this.article._id).
                        subscribe(function (deletedArticle) { return _this._router.navigate(['']); }, function (error) { return _this.errorMessage = error; });
                };
                return ViewComponent;
            }());
            ViewComponent = __decorate([
                core_1.Component({
                    selector: 'view',
                    templateUrl: 'app/emergencyalert/view/view.template.html',
                }),
                __metadata("design:paramtypes", [router_1.Router,
                    router_1.ActivatedRoute,
                    authentication_service_1.AuthenticationService,
                    emergencyalert_service_1.EmergencyAlertService])
            ], ViewComponent);
            exports_1("ViewComponent", ViewComponent);
        }
    };
});
//# sourceMappingURL=view.component.js.map