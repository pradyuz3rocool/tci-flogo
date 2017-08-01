"use strict";var __decorate=this&&this.__decorate||function(e,t,i,s){var r,n=arguments.length,o=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),ng2_translate_1=require("ng2-translate"),lodash=require("lodash"),rxjs_extensions_1=require("../../../../../../common/rxjs-extensions"),ConnectionsFormBuilderFieldsBase=function(){function e(e){var t=this;this._hasError=!1,this._hasError=!1,this.translate=e,this.subject=new rxjs_extensions_1.Subject,this.subject.debounceTime(2e3).subscribe(function(e){t._info.value=e.target.value,t.publishNextChange()})}return e.prototype.onChangeField=function(e){this._info.value=e.target.value,this.publishNextChange()},e.prototype._getMessage=function(e,t){return lodash.assign({},{message:e},{payload:t})},e.prototype.publishNextChange=function(){this._fieldObserver.next(this._getMessage("change-field",this._info))},e.prototype.isReadOnly=function(){return!this._info.isTrigger&&"output"===this._info.direction},e.prototype.onValidate=function(e){var t=e.target.value||"";if(this._info.required){if(!t.trim()&&!this._info.allowed)return this._errorMessage="Title required",this._hasError=!0,void this._fieldObserver.next(this._getMessage("validation",{status:"error",field:this._info.name}));if(this._info.allowed&&"0: <empty>"===t.trim())return this._errorMessage="Title required",this._hasError=!0,void this._fieldObserver.next(this._getMessage("validation",{status:"error",field:this._info.name}));this._hasError=!1,this._fieldObserver.next(this._getMessage("validation",{status:"ok",field:this._info.name}))}this._info.validation&&(this._validate(t)?(this._hasError=!1,this._fieldObserver.next(this._getMessage("validation",{status:"ok",field:this._info.name}))):(this._hasError=!0,this._errorMessage=this._info.validationMessage,this._fieldObserver.next(this._getMessage("validation",{status:"error",field:this._info.name}))))},e.prototype._validate=function(e){return new RegExp(this._info.validation).test(e)},e.prototype.onFocus=function(e){this.originalInfo=Object.assign({},this._info)},e.prototype.onKeyUp=function(e){if("Escape"===e.key)return this._info=Object.assign({},this.originalInfo),this._value&&(this._value=this._info.value),void this.publishNextChange();this.subject.next(e)},e.prototype.onBlur=function(e){this.publishNextChange()},e}();ConnectionsFormBuilderFieldsBase=__decorate([core_1.Component({template:"",inputs:["_info:info","_fieldObserver:fieldObserver"]}),__metadata("design:paramtypes",[ng2_translate_1.TranslateService])],ConnectionsFormBuilderFieldsBase),exports.ConnectionsFormBuilderFieldsBase=ConnectionsFormBuilderFieldsBase;