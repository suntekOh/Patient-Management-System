System.register(["./ml4hepatitis.component", "./create/create.component", "./view/view.component"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ml4hepatitis_component_1, create_component_1, view_component_1, ML4HepatitisRoutes;
    return {
        setters: [
            function (ml4hepatitis_component_1_1) {
                ml4hepatitis_component_1 = ml4hepatitis_component_1_1;
            },
            function (create_component_1_1) {
                create_component_1 = create_component_1_1;
            },
            function (view_component_1_1) {
                view_component_1 = view_component_1_1;
            }
        ],
        execute: function () {
            exports_1("ML4HepatitisRoutes", ML4HepatitisRoutes = [{
                    path: 'ml4hepatitis',
                    component: ml4hepatitis_component_1.ML4HepatitisComponent,
                    children: [
                        { path: 'create', component: create_component_1.CreateComponent },
                        { path: 'view', component: view_component_1.ViewComponent },
                    ],
                }]);
        }
    };
});
//# sourceMappingURL=ml4hepatitis.routes.js.map