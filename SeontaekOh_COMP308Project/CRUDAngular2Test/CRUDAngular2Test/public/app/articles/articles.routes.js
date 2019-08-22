System.register(["./articles.component", "./create/create.component", "./list/list.component", "./view/view.component", "./edit/edit.component", "./listStudentByCourse/listStudentByCourse.component", "./listAllStudents/listAllStudents.component", "./listAllCourses/listAllCourses.component"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var articles_component_1, create_component_1, list_component_1, view_component_1, edit_component_1, listStudentByCourse_component_1, listAllStudents_component_1, listAllCourses_component_1, ArticlesRoutes;
    return {
        setters: [
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
            exports_1("ArticlesRoutes", ArticlesRoutes = [{
                    path: 'articles',
                    component: articles_component_1.ArticlesComponent,
                    children: [
                        { path: '', component: list_component_1.ListComponent },
                        { path: 'listStudentByCourse', component: listStudentByCourse_component_1.ListStudentByCourseComponent },
                        { path: 'listAllStudents', component: listAllStudents_component_1.ListAllStudentsComponent },
                        { path: 'listAllCourses', component: listAllCourses_component_1.ListAllCoursesComponent },
                        { path: 'create', component: create_component_1.CreateComponent },
                        { path: ':articleId', component: view_component_1.ViewComponent },
                        { path: ':articleId/edit', component: edit_component_1.EditComponent }
                    ],
                }]);
        }
    };
});
//# sourceMappingURL=articles.routes.js.map