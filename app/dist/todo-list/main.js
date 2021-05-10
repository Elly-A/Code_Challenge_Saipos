(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+i8n":
/*!*******************************************!*\
  !*** ./src/app/ext_modules/extmodules.ts ***!
  \*******************************************/
/*! exports provided: matModules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matModules", function() { return matModules; });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");











const matModules = [
    _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
    _angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"],
    _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
    _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
];


/***/ }),

/***/ "+nKO":
/*!***************************************************************************!*\
  !*** ./src/app/components/todo-list/single-todo/single-todo.component.ts ***!
  \***************************************************************************/
/*! exports provided: SingleTodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleTodoComponent", function() { return SingleTodoComponent; });
/* harmony import */ var src_app_util_animations_inOutAnimation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/util/animations/inOutAnimation */ "B638");
/* harmony import */ var tassign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tassign */ "6Vot");
/* harmony import */ var tassign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tassign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dialog_validate_supervisor_password_validate_supervisor_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dialog/validate-supervisor-password/validate-supervisor-password.component */ "fV+C");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/todo.service */ "tadm");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");














function SingleTodoComponent_mat_radio_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-radio-button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SingleTodoComponent_mat_radio_button_4_Template_mat_radio_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r8.completeTodo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@inOutAnimation", undefined);
} }
const _c0 = function (a0) { return { "todo-complete": a0 }; };
function SingleTodoComponent_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c0, ctx_r1.todo.isCompleted));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.todo.content);
} }
function SingleTodoComponent_mat_form_field_6_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function SingleTodoComponent_mat_form_field_6_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r10.updateCurrentContent($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r2.todo.content);
} }
function SingleTodoComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SingleTodoComponent_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r12.saveChanges(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SingleTodoComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SingleTodoComponent_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r14.discardChanges(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SingleTodoComponent_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SingleTodoComponent_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r16.enableEditMode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "create");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r5.todo.timesEdited > 1);
} }
const _c1 = function (a0) { return { "active": a0 }; };
const _c2 = function (a0) { return { "pinned": a0 }; };
function SingleTodoComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SingleTodoComponent_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r18.pinTodo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "push_pin");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c1, ctx_r6.todo.isPinned));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c2, ctx_r6.todo.isPinned));
} }
function SingleTodoComponent_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SingleTodoComponent_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r20.returnTodo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "supervisor_account");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r7.todo.timesCompleted > 2);
} }
const _c3 = function (a0) { return { "edit-mode": a0 }; };
class SingleTodoComponent {
    constructor(dialog, service) {
        this.dialog = dialog;
        this.service = service;
        this.subscriptions = [];
        this.editMode = false;
    }
    ngOnInit() {
        this.todo = Object(tassign__WEBPACK_IMPORTED_MODULE_1__["tassign"])(this.todo, Object.assign({}, this.originalTodo));
    }
    completeTodo() {
        if (this.editMode) {
            return;
        }
        if (!this.todo.isCompleted) {
            this.toggleTodo();
            this.updateTodo();
        }
    }
    enableEditMode() {
        if (this.todo.timesEdited > 1) {
        }
        else {
            const pwCheckSubscription = this.openValidateSupervisorPasswordDialog({ option: 'editável', times: this.todo.timesEdited }).afterClosed()
                .subscribe((isValid) => {
                if (isValid) {
                    this.currentContent = this.todo.content;
                    this.editMode = true;
                }
            });
            this.subscriptions.push(pwCheckSubscription);
        }
    }
    returnTodo() {
        if (this.todo.timesCompleted > 2) {
        }
        else {
            this.openValidateSupervisorPasswordDialog({ option: 'pendente', times: this.todo.timesCompleted }).afterClosed()
                .subscribe((isValid) => {
                if (isValid) {
                    this.toggleTodo();
                    this.updateTodo();
                }
            });
        }
    }
    updateCurrentContent(content) {
        this.currentContent = content;
    }
    saveChanges() {
        this.todo.content = this.currentContent;
        this.incrementTimesEdited();
        this.updateTodo();
        this.editMode = false;
    }
    discardChanges() {
        this.currentContent = null;
        this.editMode = false;
    }
    pinTodo() {
        this.todo.isPinned = !this.todo.isPinned;
        this.updateTodo();
    }
    todoIsAvailable() {
        return !this.todo.isCompleted && !this.editMode;
    }
    updateTodo() {
        const updateSubscription = this.service.update(this.todo)
            .subscribe();
        this.subscriptions.push(updateSubscription);
    }
    toggleTodo() {
        if (!this.todo.isCompleted) {
            this.incrementTimesCompleted();
        }
        this.toggleIsCompleted();
    }
    toggleIsCompleted() {
        this.todo.isCompleted = !this.todo.isCompleted;
    }
    openValidateSupervisorPasswordDialog(data) {
        return this.dialog.open(_dialog_validate_supervisor_password_validate_supervisor_password_component__WEBPACK_IMPORTED_MODULE_2__["ValidateSupervisorPasswordComponent"], {
            height: '300px',
            width: '500px',
            data
        });
    }
    incrementTimesCompleted() {
        this.todo.timesCompleted++;
    }
    incrementTimesEdited() {
        this.todo.timesEdited++;
    }
    ngOnDestroy() {
        this.subscriptions.forEach(subscription => {
            subscription.unsubscribe();
        });
    }
}
SingleTodoComponent.ɵfac = function SingleTodoComponent_Factory(t) { return new (t || SingleTodoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_5__["TodoService"])); };
SingleTodoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SingleTodoComponent, selectors: [["single-todo"]], inputs: { originalTodo: ["todo", "originalTodo"] }, decls: 21, vars: 15, consts: [[1, "single-todo", 3, "ngClass"], [1, "todo"], [1, "todo-content"], ["matTooltip", "Marcar tarefa como completa", 3, "click", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], [4, "ngIf"], [1, "todo-actions"], ["matTooltip", "Salvar tarefa", "mat-button", "", 3, "click", 4, "ngIf"], ["matTooltip", "Cancelar atualiza\u00E7\u00E3o", "mat-button", "", 3, "click", 4, "ngIf"], [3, "matTooltip"], ["mat-button", "", 3, "disabled", "click", 4, "ngIf"], ["class", "pin-button", "matTooltip", "Fixar tarefa", "mat-button", "", 3, "ngClass", "click", 4, "ngIf"], [1, "author"], ["matTooltip", "Marcar tarefa como completa", 3, "click"], [3, "ngClass"], ["matInput", "", 3, "value", "change"], ["matTooltip", "Salvar tarefa", "mat-button", "", 3, "click"], ["matTooltip", "Cancelar atualiza\u00E7\u00E3o", "mat-button", "", 3, "click"], ["mat-button", "", 3, "disabled", "click"], ["matTooltip", "Fixar tarefa", "mat-button", "", 1, "pin-button", 3, "ngClass", "click"]], template: function SingleTodoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, SingleTodoComponent_mat_radio_button_4_Template, 1, 1, "mat-radio-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, SingleTodoComponent_p_5_Template, 2, 4, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, SingleTodoComponent_mat_form_field_6_Template, 2, 1, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, SingleTodoComponent_button_8_Template, 3, 0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, SingleTodoComponent_button_9_Template, 3, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, SingleTodoComponent_button_11_Template, 3, 1, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, SingleTodoComponent_button_12_Template, 3, 6, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, SingleTodoComponent_button_14_Template, 3, 1, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "section", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](13, _c3, ctx.editMode));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.todoIsAvailable());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.editMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.editMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.editMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.editMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltip", !(ctx.todo.timesEdited > 1) ? "Editar tarefa" : "Voc\u00EA j\u00E1 atingiu o limite de altera\u00E7\u00F5es");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.todoIsAvailable());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.todoIsAvailable());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltip", !(ctx.todo.timesCompleted > 2) ? "Voltar tarefa para pendente (precisa de autoriza\u00E7\u00E3o)" : "Voc\u00EA j\u00E1 atingiu o limite desta opera\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.todo.isCompleted);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.todo.createdByName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.todo.createdByEmail);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltip"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__["MatRadioButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"]], styles: [".single-todo[_ngcontent-%COMP%] {\n  position: relative;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\nmat-card[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  transition: 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n\nmat-card[_ngcontent-%COMP%]   .todo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n}\n\nmat-card[_ngcontent-%COMP%]   .todo-content[_ngcontent-%COMP%], mat-card[_ngcontent-%COMP%]   .todo-actions[_ngcontent-%COMP%] {\n  display: flex;\n}\n\nmat-card[_ngcontent-%COMP%]   .todo-content[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nmat-card[_ngcontent-%COMP%]   .todo-actions[_ngcontent-%COMP%] {\n  margin-bottom: -1rem;\n}\n\n.author[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #b2a0cc;\n}\n\n.edit-mode[_ngcontent-%COMP%] {\n  transition: 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n\n.edit-mode[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  background-color: #737373 !important;\n}\n\n.edit-mode[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 90%;\n}\n\n.todo-complete[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n}\n\n.hidden[_ngcontent-%COMP%] {\n  display: none !important;\n  width: 0 !important;\n  height: 0 !important;\n  opacity: 0 !important;\n  transition: 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n\n.pin-button.active[_ngcontent-%COMP%] {\n  background-color: #626262 !important;\n}\n\n.pinned[_ngcontent-%COMP%] {\n  transform: rotate(45deg);\n  margin-right: 0.2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2luZ2xlLXRvZG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFDRTtFQUNFLG9EQUFBO0FBQ0o7O0FBRUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7QUFBSjs7QUFHRTs7RUFFRSxhQUFBO0FBREo7O0FBSUU7RUFDRSxXQUFBO0FBRko7O0FBS0U7RUFDRSxvQkFBQTtBQUhKOztBQVFFO0VBQ0UsY0FBQTtBQUxKOztBQVNBO0VBQ0Usb0RBQUE7QUFORjs7QUFPRTtFQUNFLG9DQUFBO0FBTEo7O0FBUUU7RUFDRSxVQUFBO0FBTko7O0FBVUE7RUFDRSw2QkFBQTtBQVBGOztBQVVBO0VBQ0Usd0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxvREFBQTtBQVBGOztBQVVBO0VBQ0Usb0NBQUE7QUFQRjs7QUFVQTtFQUNFLHdCQUFBO0VBQ0Esb0JBQUE7QUFQRiIsImZpbGUiOiJzaW5nbGUtdG9kby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaW5nbGUtdG9kbyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5tYXQtY2FyZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAqIHtcclxuICAgIHRyYW5zaXRpb246IC4zcyBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKTtcclxuICB9XHJcblxyXG4gIC50b2RvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAudG9kby1jb250ZW50LFxyXG4gIC50b2RvLWFjdGlvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcblxyXG4gIC50b2RvLWNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAudG9kby1hY3Rpb25zIHtcclxuICAgIG1hcmdpbi1ib3R0b206IC0xcmVtO1xyXG4gIH1cclxuXHJcbn1cclxuLmF1dGhvciB7XHJcbiAgc3BhbiB7XHJcbiAgICBjb2xvcjogI2IyYTBjYztcclxuICB9XHJcbn1cclxuXHJcbi5lZGl0LW1vZGUge1xyXG4gIHRyYW5zaXRpb246IC4zcyBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKTtcclxuICBtYXQtY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzM3MzczICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICBtYXQtZm9ybS1maWVsZCB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gIH1cclxufVxyXG5cclxuLnRvZG8tY29tcGxldGUge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG59XHJcblxyXG4uaGlkZGVuIHtcclxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDAgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDAgIWltcG9ydGFudDtcclxuICBvcGFjaXR5OiAwICFpbXBvcnRhbnQ7XHJcbiAgdHJhbnNpdGlvbjogLjNzIGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpO1xyXG59XHJcblxyXG4ucGluLWJ1dHRvbi5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2MjYyNjIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBpbm5lZCB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gIG1hcmdpbi1yaWdodDogLjJyZW07XHJcbn0iXX0= */"], data: { animation: [
            src_app_util_animations_inOutAnimation__WEBPACK_IMPORTED_MODULE_0__["inOutAnimation"],
        ] } });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\daccu\OneDrive\Professional Life\Code Challenges\SAIPOS\20210507\todo-list\front-end\src\main.ts */"zUnb");


/***/ }),

/***/ "1c86":
/*!**********************************************!*\
  !*** ./src/app/util/validators/Validator.ts ***!
  \**********************************************/
/*! exports provided: CustomValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomValidator", function() { return CustomValidator; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");



class CustomValidator {
    constructor() { }
    static emailValidator(control) {
        if (control.value.length > 4) {
            return CustomValidator.http.get(CustomValidator.mailboxAPIUrl, {
                params: {
                    access_key: CustomValidator.mailboxAPIKey,
                    email: control.value
                }
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => res.mx_found && res.format_valid ?
                null :
                { isInvalid: true, apiResponse: res }));
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
    }
}
CustomValidator.mailboxAPIKey = '42bc40bb8180a89b8d799300c42ad141';
CustomValidator.mailboxAPIUrl = 'https://apilayer.net/api/check';
CustomValidator.http = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"](new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpXhrBackend"]({ build: () => new XMLHttpRequest() }));


/***/ }),

/***/ "36mw":
/*!*********************************************************************!*\
  !*** ./src/app/components/todo-list/add-todo/add-todo.component.ts ***!
  \*********************************************************************/
/*! exports provided: AddTodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTodoComponent", function() { return AddTodoComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_util_animations_inOutAnimation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/util/animations/inOutAnimation */ "B638");
/* harmony import */ var src_app_util_validators_Validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/util/validators/Validator */ "1c86");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/todo.service */ "tadm");
/* harmony import */ var _generate_todos_generate_todos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../generate-todos/generate-todos.component */ "RpF7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "qFsG");














function AddTodoComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddTodoComponent_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r3.openForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltip", ctx_r0.openFormDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-label", "Clique para " + ctx_r0.openFormDescription.toLowerCase());
} }
function AddTodoComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddTodoComponent_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r5.closeForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltip", ctx_r1.closeFormDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-label", "Clique para " + ctx_r1.closeFormDescription.toLowerCase());
} }
function AddTodoComponent_section_4_mat_error_15_small_1_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddTodoComponent_section_4_mat_error_15_small_1_span_1_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13); const errors_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).ngIf; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r11.log(errors_r8.apiResponse); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Voc\u00EA quis dizer: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddTodoComponent_section_4_mat_error_15_small_1_span_1_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13); const errors_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).ngIf; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r14.correctCreatedByEmailField(errors_r8.apiResponse.did_you_mean); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const errors_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](errors_r8.apiResponse.did_you_mean);
} }
function AddTodoComponent_section_4_mat_error_15_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddTodoComponent_section_4_mat_error_15_small_1_span_1_Template, 5, 1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const errors_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", errors_r8.apiResponse.did_you_mean);
} }
function AddTodoComponent_section_4_mat_error_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddTodoComponent_section_4_mat_error_15_small_1_Template, 2, 1, "small", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const errors_r8 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", errors_r8.isInvalid);
} }
function AddTodoComponent_section_4_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function AddTodoComponent_section_4_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r18.addTodo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Conte\u00FAdo da tarefa");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Respons\u00E1vel");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "E-mail do respons\u00E1vel");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, AddTodoComponent_section_4_mat_error_15_Template, 2, 1, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Adicionar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@inOutAnimation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r2.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.form.controls.createdByEmail.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r2.form.valid);
} }
class AddTodoComponent {
    constructor(service, fb) {
        this.service = service;
        this.fb = fb;
        this.subscriptions = [];
        this.openFormDescription = 'Adicionar nova tarefa';
        this.closeFormDescription = 'Cancelar';
        this.formOpen = false;
        this.form = this.fb.group({
            content: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                ]],
            createdByName: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required
                ]],
            createdByEmail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
                [src_app_util_validators_Validator__WEBPACK_IMPORTED_MODULE_2__["CustomValidator"].emailValidator]
            ],
        });
    }
    ngOnInit() {
    }
    addTodo() {
        const addSubscription = this.service.add({
            content: this.form.get('content').value,
            createdByEmail: this.form.get('createdByEmail').value,
            createdByName: this.form.get('createdByName').value,
            isCompleted: false,
            timesCompleted: 0,
            timesEdited: 0,
            isPinned: false
        }).subscribe();
        this.subscriptions.push(addSubscription);
        this.form.reset();
        this.closeForm();
    }
    openForm() {
        this.formOpen = true;
    }
    closeForm() {
        this.formOpen = false;
    }
    correctCreatedByEmailField(newField) {
        this.form.controls.createdByEmail.setValue(newField);
    }
    ngOnDestroy() {
        this.subscriptions.forEach(subscription => {
            subscription.unsubscribe();
        });
    }
    log(msg) {
        console.log(msg);
    }
}
AddTodoComponent.ɵfac = function AddTodoComponent_Factory(t) { return new (t || AddTodoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_4__["TodoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
AddTodoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AddTodoComponent, selectors: [["add-todo"]], decls: 5, vars: 4, consts: [[1, "add-todo-buttons"], ["mat-button", "", 3, "matTooltip", "click", 4, "ngIf"], ["class", "add-todo-form", 4, "ngIf"], ["mat-button", "", 3, "matTooltip", "click"], [1, "add-todo-form"], [3, "formGroup", "ngSubmit"], ["id", "todo-content", "matInput", "", "formControlName", "content"], ["id", "name", "matInput", "", "formControlName", "createdByName"], ["type", " email", "id", "email", "matInput", "", "formControlName", "createdByEmail"], ["class", "did-you-mean", 4, "ngIf"], ["color", "primary", "mat-button", "", "type", "submit", 3, "disabled"], [1, "did-you-mean"], [4, "ngIf"], [3, "click", 4, "ngIf"], [3, "click"], ["role", "button", 1, "did-you-mean-a", 3, "click"]], template: function AddTodoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "generate-todos");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AddTodoComponent_button_2_Template, 3, 2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, AddTodoComponent_button_3_Template, 3, 2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, AddTodoComponent_section_4_Template, 18, 4, "section", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@inOutAnimation", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.formOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.formOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.formOpen);
    } }, directives: [_generate_todos_generate_todos_component__WEBPACK_IMPORTED_MODULE_5__["GenerateTodosComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"]], styles: [".add-todo-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.add-todo-form[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  margin: 0 1rem;\n}\n\n.add-todo-form[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.add-todo-form[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: inherit;\n}\n\n.did-you-mean[_ngcontent-%COMP%] {\n  margin-top: -1rem;\n  margin-bottom: 0.5rem;\n  position: relative;\n  z-index: 1;\n}\n\n.did-you-mean[_ngcontent-%COMP%]   .did-you-mean-a[_ngcontent-%COMP%] {\n  cursor: pointer;\n  text-decoration: underline;\n}\n\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.mb-2[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n\n.mb-0[_ngcontent-%COMP%] {\n  margin-bottom: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYWRkLXRvZG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFHRTtFQUNFLGNBQUE7QUFBSjs7QUFFSTtFQUNFLFdBQUE7QUFBTjs7QUFFTTtFQUNFLGNBQUE7QUFBUjs7QUFNQTtFQUNFLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFIRjs7QUFLRTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtBQUhKOztBQVFFO0VBQ0UsU0FBQTtBQUxKOztBQVNBO0VBQ0UsbUJBQUE7QUFORjs7QUFTQTtFQUNFLDJCQUFBO0FBTkYiLCJmaWxlIjoiYWRkLXRvZG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkLXRvZG8tYnV0dG9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4uYWRkLXRvZG8tZm9ybSB7XHJcbiAgbWF0LWNhcmQge1xyXG4gICAgbWFyZ2luOiAwIDFyZW07XHJcblxyXG4gICAgZm9ybSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgbWF0LWZvcm0tZmllbGQge1xyXG4gICAgICAgIHdpZHRoOiBpbmhlcml0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZGlkLXlvdS1tZWFuIHtcclxuICBtYXJnaW4tdG9wOiAtMXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxuXHJcbiAgLmRpZC15b3UtbWVhbi1hIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIH1cclxufVxyXG5cclxuZm9ybSB7XHJcbiAgYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbn1cclxuXHJcbi5tYi0yIHtcclxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcblxyXG4ubWItMCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG59Il19 */"], data: { animation: [
            src_app_util_animations_inOutAnimation__WEBPACK_IMPORTED_MODULE_1__["inOutAnimation"]
        ] } });


/***/ }),

/***/ "4sSj":
/*!**********************************************!*\
  !*** ./src/app/util/convertArrayToObject.ts ***!
  \**********************************************/
/*! exports provided: convertArrayToObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertArrayToObject", function() { return convertArrayToObject; });
/* harmony import */ var tassign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tassign */ "6Vot");
/* harmony import */ var tassign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tassign__WEBPACK_IMPORTED_MODULE_0__);

function convertArrayToObject(array) {
    let object = {};
    array.forEach((t) => {
        object = Object(tassign__WEBPACK_IMPORTED_MODULE_0__["tassign"])(object, Object.assign(Object.assign({}, object), { [t.id]: t }));
    });
    return object;
}


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "B638":
/*!***************************************************!*\
  !*** ./src/app/util/animations/inOutAnimation.ts ***!
  \***************************************************/
/*! exports provided: inOutAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inOutAnimation", function() { return inOutAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");

const inOutAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('inOutAnimation', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, width: '0' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.3s cubic-bezier(0.075, 0.82, 0.165, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, width: '*' }))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, width: '*' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.3s cubic-bezier(0.075, 0.82, 0.165, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, width: '0' }))
    ]),
]);


/***/ }),

/***/ "Bgb6":
/*!******************************************************!*\
  !*** ./src/app/services/supervisor-check.service.ts ***!
  \******************************************************/
/*! exports provided: SupervisorCheckService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupervisorCheckService", function() { return SupervisorCheckService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class SupervisorCheckService {
    constructor(http) {
        this.http = http;
    }
    validate(password) {
        // password in backend will be encrypted
        return password === 'TrabalheNaSaipos';
    }
}
SupervisorCheckService.ɵfac = function SupervisorCheckService_Factory(t) { return new (t || SupervisorCheckService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
SupervisorCheckService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SupervisorCheckService, factory: SupervisorCheckService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "GK9q":
/*!***********************************!*\
  !*** ./src/app/util/sortTodos.ts ***!
  \***********************************/
/*! exports provided: sortTodos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortTodos", function() { return sortTodos; });
function sortTodos(todos) {
    return Object.values(todos).sort((todo1, todo2) => {
        if (!todo1.isPinned && todo2.isPinned) {
            return 1;
        }
        else if (todo1.isPinned && !todo2.isPinned) {
            return -1;
        }
        else {
            return parseInt(todo2.id, 10) - parseInt(todo1.id, 10);
        }
    });
}


/***/ }),

/***/ "RPnm":
/*!*************************************************************!*\
  !*** ./src/app/components/todo-list/todo-list.component.ts ***!
  \*************************************************************/
/*! exports provided: TodoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListComponent", function() { return TodoListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-redux/store */ "Usal");
/* harmony import */ var src_app_util_animations_inOutAnimation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/util/animations/inOutAnimation */ "B638");
/* harmony import */ var src_app_util_sortTodos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/util/sortTodos */ "GK9q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _add_todo_add_todo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-todo/add-todo.component */ "36mw");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _single_todo_single_todo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./single-todo/single-todo.component */ "+nKO");









function TodoListComponent_h2_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Tarefas pendentes");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function TodoListComponent_mat_list_item_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "single-todo", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const todo_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@inOutAnimation", undefined)("todo", todo_r4);
} }
function TodoListComponent_h2_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Tarefas conclu\u00EDdas");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function TodoListComponent_mat_list_item_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "single-todo", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const todo_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@inOutAnimation", undefined)("todo", todo_r5);
} }
class TodoListComponent {
    constructor() { }
    ngOnInit() {
    }
}
TodoListComponent.ɵfac = function TodoListComponent_Factory(t) { return new (t || TodoListComponent)(); };
TodoListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: TodoListComponent, selectors: [["todo-list"]], decls: 15, vars: 12, consts: [[1, "container"], [1, "todo-list-actions"], [1, "pending-todos"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "complete-todos"], [3, "todo"]], template: function TodoListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "add-todo");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, TodoListComponent_h2_4_Template, 2, 0, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, TodoListComponent_mat_list_item_7_Template, 2, 2, "mat-list-item", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, TodoListComponent_h2_10_Template, 2, 0, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, TodoListComponent_mat_list_item_13_Template, 2, 2, "mat-list-item", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 4, ctx.$pendingTodos).length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 6, ctx.$pendingTodos));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](11, 8, ctx.$completedTodos).length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](14, 10, ctx.$completedTodos));
    } }, directives: [_add_todo_add_todo_component__WEBPACK_IMPORTED_MODULE_5__["AddTodoComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListItem"], _single_todo_single_todo_component__WEBPACK_IMPORTED_MODULE_8__["SingleTodoComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: ["section.container[_ngcontent-%COMP%] {\n  height: 150%;\n}\n\nmat-list[_ngcontent-%COMP%] {\n  margin: 1rem 0;\n}\n\nmat-list-item[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  height: 100% !important;\n}\n\nmat-list-item[_ngcontent-%COMP%]   single-todo[_ngcontent-%COMP%] {\n  width: 100%;\n  transform-origin: left;\n}\n\n.todo-list-actions[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0b2RvLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxXQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFHQTtFQUNFLG1CQUFBO0FBQUYiLCJmaWxlIjoidG9kby1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbi5jb250YWluZXIge1xyXG4gIGhlaWdodDogMTUwJTtcclxufVxyXG5cclxubWF0LWxpc3Qge1xyXG4gIG1hcmdpbjogMXJlbSAwO1xyXG59XHJcblxyXG5tYXQtbGlzdC1pdGVtIHtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIFxyXG4gIHNpbmdsZS10b2RvIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcclxuICB9XHJcbn1cclxuXHJcbi50b2RvLWxpc3QtYWN0aW9ucyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufSJdfQ== */"], data: { animation: [
            src_app_util_animations_inOutAnimation__WEBPACK_IMPORTED_MODULE_2__["inOutAnimation"]
        ] } });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_redux_store__WEBPACK_IMPORTED_MODULE_1__["select"])((s) => Object(src_app_util_sortTodos__WEBPACK_IMPORTED_MODULE_3__["sortTodos"])(s.todoState.todos)
        .filter(todo => !todo.isCompleted))
], TodoListComponent.prototype, "$pendingTodos", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_redux_store__WEBPACK_IMPORTED_MODULE_1__["select"])((s) => Object(src_app_util_sortTodos__WEBPACK_IMPORTED_MODULE_3__["sortTodos"])(s.todoState.todos)
        .filter(todo => todo.isCompleted))
], TodoListComponent.prototype, "$completedTodos", void 0);


/***/ }),

/***/ "RpF7":
/*!*********************************************************************************!*\
  !*** ./src/app/components/todo-list/generate-todos/generate-todos.component.ts ***!
  \*********************************************************************************/
/*! exports provided: GenerateTodosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenerateTodosComponent", function() { return GenerateTodosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/todo.service */ "tadm");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");





class GenerateTodosComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
    }
    getThreeRandom() {
        this.service.getThreeRandomTodos()
            .subscribe(todos => {
            todos.forEach(todo => {
                this.service.add(todo)
                    .toPromise();
            });
        });
    }
}
GenerateTodosComponent.ɵfac = function GenerateTodosComponent_Factory(t) { return new (t || GenerateTodosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_1__["TodoService"])); };
GenerateTodosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GenerateTodosComponent, selectors: [["generate-todos"]], decls: 5, vars: 0, consts: [["mat-button", "", 3, "click"], ["matTooltip", "Clique para gerar 3 tarefas aleat\u00F3rias"]], template: function GenerateTodosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GenerateTodosComponent_Template_button_click_1_listener() { return ctx.getThreeRandom(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Estou sem tarefas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__["MatTooltip"]], styles: ["mat-icon[_ngcontent-%COMP%] {\n  position: relative;\n  top: -0.4rem;\n  left: -0.2rem;\n  transform: scale(0.7);\n  transform-origin: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZ2VuZXJhdGUtdG9kb3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQUNGIiwiZmlsZSI6ImdlbmVyYXRlLXRvZG9zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWljb24ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IC0uNHJlbTtcclxuICBsZWZ0OiAtMC4ycmVtO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoLjcpO1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "RtZh":
/*!*************************************************************!*\
  !*** ./src/app/components/dark-mode/dark-mode.component.ts ***!
  \*************************************************************/
/*! exports provided: DarkModeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DarkModeComponent", function() { return DarkModeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");




class DarkModeComponent {
    constructor() {
        this.isDarkMode = false;
    }
    ngOnInit() {
        const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (userPrefersDark) {
            this.isDarkMode = true;
            document.querySelector('[main-id]')
                .id = 'mat-app-dark-background';
        }
    }
    ngAfterViewInit() {
        this.isDarkMode ?
            document.getElementById('mat-slide-input').click() :
            '';
    }
    onChange(e) {
        const body = document.querySelector('[main-id]');
        if (e.checked) {
            body.id = 'mat-app-dark-background';
            this.isDarkMode = true;
        }
        else {
            body.id = '';
            this.isDarkMode = false;
        }
    }
}
DarkModeComponent.ɵfac = function DarkModeComponent_Factory(t) { return new (t || DarkModeComponent)(); };
DarkModeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DarkModeComponent, selectors: [["dark-mode"]], decls: 4, vars: 1, consts: [["id", "mat-slide", 3, "matTooltip", "change"]], template: function DarkModeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "dark_mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-slide-toggle", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DarkModeComponent_Template_mat_slide_toggle_change_3_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx.isDarkMode ? "Clique aqui para desabilitar o modo noturno." : "Clique aqui para habilitar o modo noturno.");
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggle"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__["MatTooltip"]], styles: ["section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\nsection[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  padding-right: 0.3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxkYXJrLW1vZGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUNFO0VBQ0UscUJBQUE7QUFDSiIsImZpbGUiOiJkYXJrLW1vZGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgXHJcbiAgbWF0LWljb24ge1xyXG4gICAgcGFkZGluZy1yaWdodDogLjNyZW07XHJcbiAgfVxyXG59Il19 */"] });


/***/ }),

/***/ "Sczg":
/*!*****************************************************!*\
  !*** ./src/app/stores/todo-list/todo-list.store.ts ***!
  \*****************************************************/
/*! exports provided: TODO_INITIAL_STATE, todoReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TODO_INITIAL_STATE", function() { return TODO_INITIAL_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todoReducer", function() { return todoReducer; });
/* harmony import */ var _todo_list_todo_list_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../todo-list/todo-list.action */ "frXq");
/* harmony import */ var tassign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tassign */ "6Vot");
/* harmony import */ var tassign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tassign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_util_convertArrayToObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/util/convertArrayToObject */ "4sSj");



const TODO_INITIAL_STATE = {
    todos: {}
};
function loadTodos(state, action) {
    const todosObj = Object(src_app_util_convertArrayToObject__WEBPACK_IMPORTED_MODULE_2__["convertArrayToObject"])(action.body);
    return Object(tassign__WEBPACK_IMPORTED_MODULE_1__["tassign"])(state, {
        todos: Object.assign(Object.assign({}, state.todos), todosObj)
    });
}
function addTodo(state, action) {
    return Object(tassign__WEBPACK_IMPORTED_MODULE_1__["tassign"])(state, {
        todos: Object.assign(Object.assign({}, state.todos), { [action.body.id]: action.body })
    });
}
function updateTodo(state, action) {
    return Object(tassign__WEBPACK_IMPORTED_MODULE_1__["tassign"])(state, {
        todos: Object.assign(Object.assign({}, state.todos), { [state.todos[action.body.id].id]: Object.assign(Object.assign({}, state.todos[action.body.id]), action.body) })
    });
}
function todoReducer(state = TODO_INITIAL_STATE, action) {
    switch (action.type) {
        case _todo_list_todo_list_action__WEBPACK_IMPORTED_MODULE_0__["actions"].LOAD_TODOS: return loadTodos(state, action);
        case _todo_list_todo_list_action__WEBPACK_IMPORTED_MODULE_0__["actions"].ADD_TODO: return addTodo(state, action);
        case _todo_list_todo_list_action__WEBPACK_IMPORTED_MODULE_0__["actions"].UPDATE_TODO: return updateTodo(state, action);
        default: return state;
    }
}


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_todo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/todo.service */ "tadm");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/todo-list/todo-list.component */ "RPnm");




class AppComponent {
    constructor(todoService) {
        this.todoService = todoService;
        this.subscriptions = [];
    }
    ngOnInit() {
        const todoSubs = this.todoService.getAll()
            .subscribe();
        this.subscriptions.push(todoSubs);
    }
    ngOnDestroy() {
        this.subscriptions.forEach(subscription => {
            subscription.unsubscribe();
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_todo_service__WEBPACK_IMPORTED_MODULE_1__["TodoService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "todo-list");
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_3__["TodoListComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ext_modules_extmodules__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ext_modules/extmodules */ "+i8n");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular-redux/store */ "Usal");
/* harmony import */ var _stores_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./stores/store */ "siQZ");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux-devtools-extension */ "5HXA");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/todo-list/todo-list.component */ "RPnm");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _components_dark_mode_dark_mode_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/dark-mode/dark-mode.component */ "RtZh");
/* harmony import */ var _components_todo_list_add_todo_add_todo_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/todo-list/add-todo/add-todo.component */ "36mw");
/* harmony import */ var _components_todo_list_single_todo_single_todo_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/todo-list/single-todo/single-todo.component */ "+nKO");
/* harmony import */ var _components_todo_list_dialog_validate_supervisor_password_validate_supervisor_password_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/todo-list/dialog/validate-supervisor-password/validate-supervisor-password.component */ "fV+C");
/* harmony import */ var _components_todo_list_generate_todos_generate_todos_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/todo-list/generate-todos/generate-todos.component */ "RpF7");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");






// Material

// Redux



// Components





















class AppModule {
    constructor(ngRedux) {
        // Enable redux-dev-tools if isDevMode()
        const enhancer = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])() ? [Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_9__["devToolsEnhancer"])({})] : [];
        // Init redux
        ngRedux.configureStore(_stores_store__WEBPACK_IMPORTED_MODULE_8__["rootReducer"], _stores_store__WEBPACK_IMPORTED_MODULE_8__["INITIAL_STATE"], [], enhancer);
    }
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_redux_store__WEBPACK_IMPORTED_MODULE_7__["NgRedux"])); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [], imports: [[
            ..._ext_modules_extmodules__WEBPACK_IMPORTED_MODULE_6__["matModules"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_redux_store__WEBPACK_IMPORTED_MODULE_7__["NgReduxModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_11__["TodoListComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"], _components_dark_mode_dark_mode_component__WEBPACK_IMPORTED_MODULE_13__["DarkModeComponent"], _components_todo_list_add_todo_add_todo_component__WEBPACK_IMPORTED_MODULE_14__["AddTodoComponent"], _components_todo_list_single_todo_single_todo_component__WEBPACK_IMPORTED_MODULE_15__["SingleTodoComponent"], _components_todo_list_dialog_validate_supervisor_password_validate_supervisor_password_component__WEBPACK_IMPORTED_MODULE_16__["ValidateSupervisorPasswordComponent"], _components_todo_list_generate_todos_generate_todos_component__WEBPACK_IMPORTED_MODULE_17__["GenerateTodosComponent"]], imports: [_angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIconModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__["MatSlideToggleModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__["MatRadioModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_24__["MatListModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__["MatTooltipModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_27__["MatInputModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__["MatDialogModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _angular_redux_store__WEBPACK_IMPORTED_MODULE_7__["NgReduxModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]] }); })();


/***/ }),

/***/ "fV+C":
/*!********************************************************************************************************************!*\
  !*** ./src/app/components/todo-list/dialog/validate-supervisor-password/validate-supervisor-password.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: ValidateSupervisorPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateSupervisorPasswordComponent", function() { return ValidateSupervisorPasswordComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_supervisor_check_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/supervisor-check.service */ "Bgb6");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");










function ValidateSupervisorPasswordComponent_mat_icon_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "visibility_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidateSupervisorPasswordComponent_mat_icon_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidateSupervisorPasswordComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Senha inv\u00E1lida! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class ValidateSupervisorPasswordComponent {
    constructor(dialogRef, fb, supervisorService, data) {
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.supervisorService = supervisorService;
        this.data = data;
        this.inputIsVisible = false;
        this.passwordForm = this.fb.group({
            password: ['']
        });
        this.passwordChecked = false;
        this.passwordIsValid = false;
    }
    ngOnInit() {
    }
    validatePassword() {
        this.passwordChecked = true;
        if (this.supervisorService.validate(this.passwordForm.get('password').value)) {
            this.passwordIsValid = true;
            this.dialogRef.close(this.passwordIsValid);
        }
    }
    toggleInputVisibility(passwordInputEl) {
        this.inputIsVisible = !this.inputIsVisible;
        this.inputIsVisible ?
            passwordInputEl.type = 'text' :
            passwordInputEl.type = 'password';
    }
    getAvailableActionNumber() {
        if (this.data.option === 'pendente') {
            if (this.data.times === 1) {
                return 2;
            }
            else if (this.data.times === 2) {
                return 1;
            }
        }
        if (this.data.option === 'editável') {
            if (this.data.times === 0) {
                return 2;
            }
            else if (this.data.times === 1) {
                return 1;
            }
        }
    }
}
ValidateSupervisorPasswordComponent.ɵfac = function ValidateSupervisorPasswordComponent_Factory(t) { return new (t || ValidateSupervisorPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_supervisor_check_service__WEBPACK_IMPORTED_MODULE_3__["SupervisorCheckService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])); };
ValidateSupervisorPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ValidateSupervisorPasswordComponent, selectors: [["validate-supervisor-password"]], decls: 19, vars: 8, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], [3, "formGroup", "ngSubmit"], ["type", "password", "matInput", "", "formControlName", "password", "required", ""], ["password", ""], ["matSuffix", ""], ["mat-button", "", 3, "click"], [4, "ngIf"], ["mat-dialog-actions", ""], ["color", "primary", "mat-button", "", "type", "submit", 3, "disabled"]], template: function ValidateSupervisorPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ValidateSupervisorPasswordComponent_Template_form_ngSubmit_5_listener() { return ctx.validatePassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Senha");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ValidateSupervisorPasswordComponent_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10); return ctx.toggleInputVisibility(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ValidateSupervisorPasswordComponent_mat_icon_13_Template, 2, 0, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ValidateSupervisorPasswordComponent_mat_icon_14_Template, 2, 0, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ValidateSupervisorPasswordComponent_div_15_Template, 5, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Enviar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Para mudar o status da tarefa para ", ctx.data.option.toUpperCase(), ", favor inserir senha de supervisor.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("Favor notar que voc\u00EA s\u00F3 pode efetuar essa opera\u00E7\u00E3o mais ", ctx.getAvailableActionNumber(), " ", ctx.getAvailableActionNumber() === 1 ? "vez" : "vezes", ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.passwordForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.inputIsVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.inputIsVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.passwordForm.controls.password.pristine && !ctx.passwordIsValid && ctx.passwordChecked);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.passwordForm.invalid);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatSuffix"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatError"]], styles: ["mat-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\ndiv[mat-dialog-content][_ngcontent-%COMP%] {\n  margin: 0;\n  margin-top: 0.7rem;\n  padding: 0;\n  width: 100%;\n  height: 50%;\n}\n\ndiv[mat-dialog-content][_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ndiv[mat-dialog-content][_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: inherit;\n}\n\ndiv[mat-dialog-actions][_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: -1.6rem;\n}\n\ndiv[mat-dialog-actions][_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHZhbGlkYXRlLXN1cGVydmlzb3ItcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUNFO0VBQ0UsV0FBQTtBQUNKOztBQUFJO0VBQ0UsY0FBQTtBQUVOOztBQUlBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBRUEsbUJBQUE7QUFGRjs7QUFJRTtFQUNFLGVBQUE7QUFGSiIsImZpbGUiOiJ2YWxpZGF0ZS1zdXBlcnZpc29yLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWVycm9yIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbmRpdlttYXQtZGlhbG9nLWNvbnRlbnRdIHtcclxuICBtYXJnaW46IDA7XHJcbiAgbWFyZ2luLXRvcDogLjdyZW07XHJcbiAgcGFkZGluZzogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDUwJTtcclxuXHJcbiAgZm9ybSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hdC1mb3JtLWZpZWxkIHtcclxuICAgICAgd2lkdGg6IGluaGVyaXQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZGl2W21hdC1kaWFsb2ctYWN0aW9uc10ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHJcbiAgbWFyZ2luLXRvcDogLTEuNnJlbTtcclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDAgMXJlbTtcclxuICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ "frXq":
/*!******************************************************!*\
  !*** ./src/app/stores/todo-list/todo-list.action.ts ***!
  \******************************************************/
/*! exports provided: actions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
var actions;
(function (actions) {
    actions["ADD_TODO"] = "ADD TODO";
    actions["UPDATE_TODO"] = "UPDATE TODO";
    actions["LOAD_TODOS"] = "LOAD TODOS";
    actions["TOGGLE_TODO"] = "TOGGLE TODO";
    actions["MARK_TODO_AS_DONE"] = "MARK TODO AS DONE";
})(actions || (actions = {}));
;


/***/ }),

/***/ "hrlM":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _dark_mode_dark_mode_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dark-mode/dark-mode.component */ "RtZh");




class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["navbar"]], decls: 8, vars: 0, consts: [["color", "primary"], [1, "left"], [1, "right"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "api");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Todo List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "dark-mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _dark_mode_dark_mode_component__WEBPACK_IMPORTED_MODULE_3__["DarkModeComponent"]], styles: ["mat-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n}\nmat-toolbar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  padding-right: 1rem;\n}\n.left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxuYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQ0U7RUFDRSxtQkFBQTtBQUNKO0FBR0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFBRiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtdG9vbGJhciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuXHJcbiAgbWF0LWljb24ge1xyXG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcclxuICB9XHJcbn1cclxuXHJcbi5sZWZ0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "siQZ":
/*!*********************************!*\
  !*** ./src/app/stores/store.ts ***!
  \*********************************/
/*! exports provided: INITIAL_STATE, rootReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_STATE", function() { return INITIAL_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootReducer", function() { return rootReducer; });
/* harmony import */ var _todo_list_todo_list_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-list/todo-list.store */ "Sczg");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "ANjH");


const INITIAL_STATE = {
    todoState: _todo_list_todo_list_store__WEBPACK_IMPORTED_MODULE_0__["TODO_INITIAL_STATE"]
};
const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
    todoState: _todo_list_todo_list_store__WEBPACK_IMPORTED_MODULE_0__["todoReducer"],
});


/***/ }),

/***/ "tadm":
/*!******************************************!*\
  !*** ./src/app/services/todo.service.ts ***!
  \******************************************/
/*! exports provided: TodoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoService", function() { return TodoService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _stores_todo_list_todo_list_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stores/todo-list/todo-list.action */ "frXq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular-redux/store */ "Usal");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class TodoService {
    constructor(redux, http) {
        this.redux = redux;
        this.http = http;
        this.url = 'http://localhost:3000/todos/';
    }
    getAll() {
        return this.http.get(this.url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => {
            const todos = res;
            this.redux.dispatch({
                type: _stores_todo_list_todo_list_action__WEBPACK_IMPORTED_MODULE_1__["actions"].LOAD_TODOS, body: todos
            });
        }));
    }
    get(id) {
        throw new Error('Method not implemented.');
    }
    add(t) {
        return this.http.post(this.url + 'add', t)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => {
            const todo = res;
            this.redux.dispatch({
                type: _stores_todo_list_todo_list_action__WEBPACK_IMPORTED_MODULE_1__["actions"].ADD_TODO,
                body: todo
            });
        }));
    }
    update(t) {
        return this.http.put(this.url + t.id, t)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(_ => {
            this.redux.dispatch({
                type: _stores_todo_list_todo_list_action__WEBPACK_IMPORTED_MODULE_1__["actions"].UPDATE_TODO,
                body: t
            });
        }));
    }
    remove(id) {
        throw new Error('Method not implemented.');
    }
    getThreeRandomTodos() {
        // Returning service unavailable
        const url = 'https://cat-fact.herokuapp.com/facts/random?animal_type=dog&amount=3';
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((randomFactArr) => {
            const todos = [];
            randomFactArr.forEach(randomFact => {
                todos.push({
                    content: randomFact.text,
                    createdByEmail: 'eu@me.com',
                    createdByName: 'Eu',
                    isCompleted: false,
                    isPinned: false,
                    timesCompleted: 0,
                    timesEdited: 0
                });
            });
            return todos;
        }));
    }
}
TodoService.ɵfac = function TodoService_Factory(t) { return new (t || TodoService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_redux_store__WEBPACK_IMPORTED_MODULE_3__["NgRedux"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
TodoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: TodoService, factory: TodoService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map