System.register(["@angular/core", "@angular/common", "@angular/forms", "@angular/router", "./articles.routes", "./articles.component", "./create/create.component", "./list/list.component", "./view/view.component", "./edit/edit.component", "./listStudentByCourse/listStudentByCourse.component", "./listAllStudents/listAllStudents.component", "./listAllCourses/listAllCourses.component"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, common_1, forms_1, router_1, articles_routes_1, articles_component_1, create_component_1, list_component_1, view_component_1, edit_component_1, listStudentByCourse_component_1, listAllStudents_component_1, listAllCourses_component_1, ArticlesModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (articles_routes_1_1) {
                articles_routes_1 = articles_routes_1_1;
            },
            function (articles_component_1_1) {
                articles_component_1 = articles_component_1_1;
            },
            function (create_component_1_1) {
                create_component_1 = create_component_1_1;
            },
            function (list_component_1_1) {
                list_component_1 = list_component_1_1;
            },
            function (view_component_1_1) {
                view_component_1 = view_component_1_1;
            },
            function (edit_component_1_1) {
                edit_component_1 = edit_component_1_1;
            },
            function (listStudentByCourse_component_1_1) {
                listStudentByCourse_component_1 = listStudentByCourse_component_1_1;
            },
            function (listAllStudents_component_1_1) {
                listAllStudents_component_1 = listAllStudents_component_1_1;
            },
            function (listAllCourses_component_1_1) {
                listAllCourses_component_1 = listAllCourses_component_1_1;
            }
        ],
        execute: function () {
            ArticlesModule = (function () {
                function ArticlesModule() {
                }
                return ArticlesModule;
            }());
            ArticlesModule = __decorate([
                core_1.NgModule({
                    imports: [
                        common_1.CommonModule,
                        forms_1.FormsModule,
                        router_1.RouterModule.forChild(articles_routes_1.ArticlesRoutes),
                    ],
                    declarations: [
                        articles_component_1.ArticlesComponent,
                        create_component_1.CreateComponent,
                        list_component_1.ListComponent,
                        view_component_1.ViewComponent,
                        edit_component_1.EditComponent,
                        listStudentByCourse_component_1.ListStudentByCourseComponent,
                        listAllStudents_component_1.ListAllStudentsComponent,
                        listAllCourses_component_1.ListAllCoursesComponent
                    ]
                })
            ], ArticlesModule);
            exports_1("ArticlesModule", ArticlesModule);
        }
    };
});
//# sourceMappingURL=articles.module.js.map