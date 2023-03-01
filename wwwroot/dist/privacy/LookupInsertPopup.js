"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LookupInsertPopup = void 0;
var React = __importStar(require("react"));
var PracticeUtilities_1 = require("../utilities/PracticeUtilities");
var core_1 = require("@material-ui/core");
var LookupInsertPopup = /** @class */ (function (_super) {
    __extends(LookupInsertPopup, _super);
    function LookupInsertPopup(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            NISTLookup: {
                Id: 0,
                LookupType: '',
                LookupName: '',
                LookupDesc: '',
                CreatedBy: '',
                CreatedDate: '',
                UpdatedBy: '',
                UpdatedDate: ''
            }, show: false, canSave: false
        };
        _this.userId = '';
        // insert a lookup
        _this.handleSubmit = function () {
            if (_this.state.NISTLookup.LookupType && _this.state.NISTLookup.LookupType.length > 0) {
                if (_this.state.NISTLookup.LookupName && _this.state.NISTLookup.LookupName.length > 0) {
                    var today = new Date().toISOString();
                    _this.state.NISTLookup.CreatedBy = _this.userId;
                    _this.state.NISTLookup.CreatedDate = today;
                    _this.state.NISTLookup.UpdatedBy = _this.userId;
                    _this.state.NISTLookup.UpdatedDate = today;
                    var insertLookupUrl = PracticeUtilities_1.baseApiUrl() + 'NISTLookup/Insert';
                    _this.insertLookup(insertLookupUrl, _this.state.NISTLookup);
                }
                else
                    alert('Please enter Lookup Name');
            }
            else
                alert('Please enter Lookup Type');
        };
        _this.insertLookup = function (url, postData) {
            console.log(url);
            var postRequestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: PracticeUtilities_1.serializeData(postData)
            };
            fetch(url, postRequestOptions).then(function (res) {
                if (res.status === 200)
                    return res.json();
                else if (res.status === 400)
                    return 'This is a Bad Request.';
                else if (res.status === 401)
                    return 'You are not authorized.';
                else if (res.status === 403)
                    return 'You don\'t have the access rights.';
                else if (res.status === 404)
                    return 'There is no data.';
                else if (res.status === 409)
                    return 'There is a conflict.';
                else if (res.status === 500)
                    return 'There is an internal server error.';
                else
                    return 'Unknown Error';
            }).then(function (responseData) {
                if (responseData.Id && responseData.Id > 0) {
                    _this.setState({ NISTLookup: responseData });
                    alert(_this.state.NISTLookup.LookupType + ' : ' + _this.state.NISTLookup.LookupName + " has been added successfully");
                    console.log(_this.state.NISTLookup);
                }
            }).catch(function (error) {
                // do something
                alert(error.message);
            });
        };
        // set state
        _this.handleChange = function (event) {
            var _a;
            var target = event.target;
            var value = target.type === 'checkbox' ? target.checked : target.value;
            var name = target.name;
            var currentState = __assign(__assign({}, _this.state.NISTLookup), (_a = {}, _a[name] = value, _a));
            _this.setState({ NISTLookup: currentState });
            if (_this.state.NISTLookup.LookupType && _this.state.NISTLookup.LookupType.length > 0 && _this.state.NISTLookup.LookupName && _this.state.NISTLookup.LookupName.length > 0)
                _this.setState({ canSave: true });
        };
        // set default values in state
        _this.handleClear = function () {
            _this.setState({
                NISTLookup: {
                    Id: 0,
                    LookupType: '',
                    LookupName: '',
                    LookupDesc: '',
                    CreatedBy: '',
                    CreatedDate: '',
                    UpdatedBy: '',
                    UpdatedDate: ''
                }, show: false, canSave: false
            });
        };
        _this.handleShow = function () {
            _this.setState({ show: true });
        };
        _this.handleClose = function () {
            _this.handleClear();
            _this.props.getLookup();
        };
        _this.userId = PracticeUtilities_1.getUserId();
        return _this;
    }
    LookupInsertPopup.prototype.render = function () {
        var _this = this;
        return (React.createElement(core_1.Grid, { item: true, xs: 12, style: { textAlign: "left" } },
            React.createElement(core_1.Grid, { item: true, xs: 12, className: "textRight" },
                React.createElement(core_1.Button, { variant: "contained", onClick: function () { _this.handleShow(); }, className: "imgButton btnImgInsert marginRight10", "data-toggle": "tooltip", title: "Add New Lookup Data" },
                    React.createElement("img", { src: window.location.origin + '/images/add_white.png', className: "btnImage" }))),
            React.createElement(core_1.Modal, { className: "insertModal", open: this.state.show, onClose: this.handleClose, disableBackdropClick: true },
                React.createElement(core_1.Paper, { className: "ModalDiv" },
                    React.createElement(core_1.Grid, { container: true, spacing: 2 },
                        React.createElement(core_1.Grid, { item: true, xs: 12, sm: 6 },
                            React.createElement(core_1.TextField, { name: "LookupType", id: this.state.NISTLookup.LookupType && this.state.NISTLookup.LookupType.length > 0 ? '' : 'requiredFieldLabel', placeholder: "Lookup Type", value: this.state.NISTLookup.LookupType, onChange: this.handleChange, helperText: "* Lookup Type", inputProps: { maxLength: 150 } })),
                        React.createElement(core_1.Grid, { item: true, xs: 12, sm: 6 },
                            React.createElement(core_1.TextField, { name: "LookupName", id: this.state.NISTLookup.LookupName && this.state.NISTLookup.LookupName.length > 0 ? '' : 'requiredFieldLabel', placeholder: "Lookup Type", value: this.state.NISTLookup.LookupName, onChange: this.handleChange, helperText: "* Lookup Name", inputProps: { maxLength: 150 } })),
                        React.createElement(core_1.Grid, { item: true, xs: 12, sm: 12 },
                            React.createElement(core_1.TextField, { name: "LookupDesc", placeholder: "Lookup Description", value: this.state.NISTLookup.LookupDesc, onChange: this.handleChange, helperText: "* Lookup Description", inputProps: { maxLength: 255 } })),
                        React.createElement(core_1.Grid, { className: "textRight", item: true, xs: 12 },
                            React.createElement(core_1.Button, { variant: 'contained', color: "primary", onClick: function () { _this.handleSubmit(); }, disabled: !this.state.canSave }, "Submit"),
                            React.createElement(core_1.Button, { variant: 'contained', color: "secondary", onClick: function () { _this.handleClear(); } }, "Clear"),
                            React.createElement(core_1.Button, { variant: 'contained', color: "default", onClick: function () { _this.handleClose(); } }, "Close")))))));
    };
    return LookupInsertPopup;
}(React.Component));
exports.LookupInsertPopup = LookupInsertPopup;
//# sourceMappingURL=LookupInsertPopup.js.map