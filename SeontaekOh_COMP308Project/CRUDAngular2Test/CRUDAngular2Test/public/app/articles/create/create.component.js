System.register(["@angular/core", "@angular/router", "../articles.service"], function (exports_1, context_1) {
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
    var core_1, router_1, articles_service_1, CreateComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (articles_service_1_1) {
                articles_service_1 = articles_service_1_1;
            }
        ],
        execute: function () {
            CreateComponent = (function () {
                function CreateComponent(_router, _articlesService) {
                    this._router = _router;
                    this._articlesService = _articlesService;
                    this.article = {};
                }
                CreateComponent.prototype.create = function () {
                    var _this = this;
                    this._articlesService
                        .create(this.article)
                        .subscribe(function (createdArticle) { return _this._router.navigate(['/articles',
                        createdArticle._id]); }, function (error) { return _this.errorMessage = error; });
                };
                return CreateComponent;
            }());
            CreateComponent = __decorate([
                core_1.Component({
                    selector: 'create',
                    templateUrl: 'app/articles/create/create.template.html'
                }),
                __metadata("design:paramtypes", [router_1.Router,
                    articles_service_1.ArticlesService])
            ], CreateComponent);
            exports_1("CreateComponent", CreateComponent);
        }
    };
});
//# sourceMappingURL=create.component.js.map