System.register(["rxjs/Rx", "rxjs/Observable", "@angular/core", "@angular/http"], function (exports_1, context_1) {
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
    var Observable_1, core_1, http_1, ArticlesService;
    return {
        setters: [
            function (_1) {
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }
        ],
        execute: function () {
            ArticlesService = (function () {
                function ArticlesService(_http) {
                    this._http = _http;
                    this._baseURL = 'api/courses';
                    this._baseURL4studentNumber = 'api/courses/students';
                    this._baseURL4listStudentByCourse = 'api/courses/listStudentByCourse';
                    this._baseURL4listAllStudents = 'api/courses/listAllStudents';
                    this._baseURL4listAllCourses = 'api/courses/listAllCourses';
                    this.test = 'api/vitalsigns/test';
                }
                ArticlesService.prototype.create = function (article) {
                    return this._http
                        .post(this._baseURL4studentNumber, article)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                ArticlesService.prototype.read = function (articleId) {
                    return this._http
                        .get(this._baseURL + "/" + articleId)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                ArticlesService.prototype.update = function (article) {
                    return this._http
                        .put(this._baseURL + "/" + article._id, article).map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                ArticlesService.prototype.delete = function (articleId) {
                    return this._http
                        .delete(this._baseURL + "/" + articleId)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                ArticlesService.prototype.list = function () {
                    return this._http
                        .get(this._baseURL4studentNumber)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                ArticlesService.prototype.search = function (courseCode) {
                    return this._http
                        .get(this._baseURL4listStudentByCourse + "/" + courseCode)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                ArticlesService.prototype.listAllStudents = function () {
                    return this._http
                        .get(this._baseURL4listAllStudents)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                ArticlesService.prototype.listAllCourses = function () {
                    return this._http
                        .get(this._baseURL4listAllCourses)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                ArticlesService.prototype.handleError = function (error) {
                    return Observable_1.Observable.throw(error.json().message || 'Server error');
                };
                return ArticlesService;
            }());
            ArticlesService = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [http_1.Http])
            ], ArticlesService);
            exports_1("ArticlesService", ArticlesService);
        }
    };
});
//# sourceMappingURL=articles.service.js.map