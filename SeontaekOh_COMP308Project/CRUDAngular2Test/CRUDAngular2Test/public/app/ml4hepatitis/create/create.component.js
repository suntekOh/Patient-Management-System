System.register(["@angular/core", "@angular/router", "../ml4hepatitis.service"], function (exports_1, context_1) {
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
    var core_1, router_1, ml4hepatitis_service_1, CreateComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (ml4hepatitis_service_1_1) {
                ml4hepatitis_service_1 = ml4hepatitis_service_1_1;
            }
        ],
        execute: function () {
            CreateComponent = (function () {
                function CreateComponent(_router, _route, _articlesService) {
                    this._router = _router;
                    this._route = _route;
                    this._articlesService = _articlesService;
                    this.article = {};
                }
                CreateComponent.prototype.create = function () {
                    var _this = this;
                    this._articlesService
                        .create(this.article)
                        .subscribe(function (createdArticle) {
                        var navigationExtras = {
                            queryParams: {
                                "bundle": JSON.stringify(createdArticle)
                            }
                        };
                        _this._router.navigate(["/ml4hepatitis/view"], navigationExtras);
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
                    }, function (error) { return _this.errorMessage = error; });
                };
                return CreateComponent;
            }());
            CreateComponent = __decorate([
                core_1.Component({
                    selector: 'create',
                    templateUrl: 'app/ml4hepatitis/create/create.template.html'
                }),
                __metadata("design:paramtypes", [router_1.Router,
                    router_1.ActivatedRoute,
                    ml4hepatitis_service_1.ML4HepatitisService])
            ], CreateComponent);
            exports_1("CreateComponent", CreateComponent);
        }
    };
});
//# sourceMappingURL=create.component.js.map