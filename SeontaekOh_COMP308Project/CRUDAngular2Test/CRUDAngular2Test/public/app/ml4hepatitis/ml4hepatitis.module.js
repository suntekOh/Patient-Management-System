System.register(["@angular/core", "@angular/common", "@angular/forms", "@angular/router", "./ml4hepatitis.routes", "./ml4hepatitis.component", "./create/create.component", "./view/view.component"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, common_1, forms_1, router_1, ml4hepatitis_routes_1, ml4hepatitis_component_1, create_component_1, view_component_1, ML4HepatitisModule;
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
            function (ml4hepatitis_routes_1_1) {
                ml4hepatitis_routes_1 = ml4hepatitis_routes_1_1;
            },
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
            ML4HepatitisModule = (function () {
                function ML4HepatitisModule() {
                }
                return ML4HepatitisModule;
            }());
            ML4HepatitisModule = __decorate([
                core_1.NgModule({
                    imports: [
                        common_1.CommonModule,
                        forms_1.FormsModule,
                        router_1.RouterModule.forChild(ml4hepatitis_routes_1.ML4HepatitisRoutes),
                    ],
                    declarations: [
                        ml4hepatitis_component_1.ML4HepatitisComponent,
                        create_component_1.CreateComponent,
                        view_component_1.ViewComponent,
                    ]
                })
            ], ML4HepatitisModule);
            exports_1("ML4HepatitisModule", ML4HepatitisModule);
        }
    };
});
//# sourceMappingURL=ml4hepatitis.module.js.map