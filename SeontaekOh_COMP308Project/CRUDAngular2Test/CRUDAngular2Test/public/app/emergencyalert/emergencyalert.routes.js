System.register(["./emergencyalert.component", "./create/create.component", "./list/list.component", "./view/view.component", "./edit/edit.component"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var emergencyalert_component_1, create_component_1, list_component_1, view_component_1, edit_component_1, EmergencyAlertRoutes;
    return {
        setters: [
            function (emergencyalert_component_1_1) {
                emergencyalert_component_1 = emergencyalert_component_1_1;
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
            }
        ],
        execute: function () {
            exports_1("EmergencyAlertRoutes", EmergencyAlertRoutes = [{
                    path: 'emergencyalert',
                    component: emergencyalert_component_1.EmergencyAlertComponent,
                    children: [
                        { path: '', component: list_component_1.ListComponent },
                        { path: 'create', component: create_component_1.CreateComponent },
                        { path: ':emergencyalertId', component: view_component_1.ViewComponent },
                        { path: ':emergencyalertId/edit', component: edit_component_1.EditComponent }
                    ],
                }]);
        }
    };
});
//# sourceMappingURL=emergencyalert.routes.js.map