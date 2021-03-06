System.register(["@angular/core", "./students.service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, students_service_1, StudentsComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (students_service_1_1) {
                students_service_1 = students_service_1_1;
            }
        ],
        execute: function () {
            StudentsComponent = /** @class */ (function () {
                function StudentsComponent() {
                }
                StudentsComponent = __decorate([
                    core_1.Component({
                        selector: 'students',
                        template: '<router-outlet></router-outlet>',
                        providers: [students_service_1.StudentsService]
                    })
                ], StudentsComponent);
                return StudentsComponent;
            }());
            exports_1("StudentsComponent", StudentsComponent);
        }
    };
});
//# sourceMappingURL=students.component.js.map