System.register(["@angular/core", "./ml4hepatitis.service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, ml4hepatitis_service_1, ML4HepatitisComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ml4hepatitis_service_1_1) {
                ml4hepatitis_service_1 = ml4hepatitis_service_1_1;
            }
        ],
        execute: function () {
            ML4HepatitisComponent = (function () {
                function ML4HepatitisComponent() {
                }
                return ML4HepatitisComponent;
            }());
            ML4HepatitisComponent = __decorate([
                core_1.Component({
                    selector: 'ml4hepatitis',
                    template: '<router-outlet></router-outlet>',
                    providers: [ml4hepatitis_service_1.ML4HepatitisService]
                })
            ], ML4HepatitisComponent);
            exports_1("ML4HepatitisComponent", ML4HepatitisComponent);
        }
    };
});
//# sourceMappingURL=ml4hepatitis.component.js.map