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
exports.MemberUpdatePopup = void 0;
var React = __importStar(require("react"));
var PracticeUtilities_1 = require("../utilities/PracticeUtilities");
var core_1 = require("@material-ui/core");
var MemberUpdatePopup = /** @class */ (function (_super) {
    __extends(MemberUpdatePopup, _super);
    function MemberUpdatePopup(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            NISTMember: {
                Id: 0,
                LastName: '',
                FirstName: '',
                MiddleName: '',
                Gender: '',
                Location: '',
                PhoneNo: '',
                Email: '',
                Remarks: '',
                CreatedBy: '',
                CreatedDate: '',
                UpdatedBy: '',
                UpdatedDate: ''
            },
            Location: [{
                    Id: 0,
                    LookupName: ''
                }],
            Email: {
                From: 'DoNotReply@Nist.gov',
                To: [''],
                CC: [''],
                BCC: ['Nist@Nist.gov'],
                Subject: '',
                Body: ''
            }, Gender: ['Male', 'Female', 'Unknown'], show: false, canSave: false
        };
        _this.userId = '';
        // Update a Member
        _this.handleSubmit = function () {
            if (_this.state.NISTMember.LastName && _this.state.NISTMember.LastName.length > 0) {
                if (_this.state.NISTMember.FirstName && _this.state.NISTMember.FirstName.length > 0) {
                    var today = new Date().toISOString();
                    _this.state.NISTMember.UpdatedDate = today;
                    _this.editMember(PracticeUtilities_1.baseApiUrl() + 'NISTMember/Update', _this.state.NISTMember, "update");
                }
                else
                    alert('Please enter Last Name');
            }
            else
                alert('Please enter First Name');
        };
        _this.handleDelete = function (id) {
            var delDto = {
                Id: id
            };
            _this.editMember(PracticeUtilities_1.baseApiUrl() + 'NISTMember/Delete', delDto, "remove");
            _this.handleClear();
            _this.props.getMember();
        };
        // set state
        _this.handleChange = function (event) {
            var _a;
            var target = event.target;
            var value = target.type === 'checkbox' ? target.checked : target.value;
            var name = target.name;
            var currentState = __assign(__assign({}, _this.state.NISTMember), (_a = {}, _a[name] = value, _a));
            _this.setState({ NISTMember: currentState });
            if (_this.state.NISTMember.LastName && _this.state.NISTMember.LastName.length > 0 && _this.state.NISTMember.FirstName && _this.state.NISTMember.FirstName.length > 0)
                _this.setState({ canSave: true });
        };
        _this.handleShow = function () {
            _this.setState({ show: true });
        };
        _this.handleClose = function () {
            _this.setState({ show: false });
            _this.props.getMember();
        };
        // set location
        _this.setLocation = function () {
            _this.setState({ Location: _this.props.Location });
        };
        // set member
        _this.setMember = function () {
            _this.state.NISTMember.Id = _this.props.NISTMember.Id;
            _this.state.NISTMember.LastName = _this.props.NISTMember.LastName;
            _this.state.NISTMember.FirstName = _this.props.NISTMember.FirstName;
            _this.state.NISTMember.MiddleName = _this.props.NISTMember.MiddleName;
            _this.state.NISTMember.Location = _this.props.NISTMember.Location;
            _this.state.NISTMember.Gender = _this.props.NISTMember.Gender;
            _this.state.NISTMember.Email = _this.props.NISTMember.Email;
            _this.state.NISTMember.PhoneNo = _this.props.NISTMember.PhoneNo;
            _this.state.NISTMember.Remarks = _this.props.NISTMember.Remarks;
            _this.state.NISTMember.CreatedBy = _this.props.NISTMember.CreatedBy;
            _this.state.NISTMember.CreatedDate = _this.props.NISTMember.CreatedDate;
            var currentSQState = __assign(__assign({}, _this.state.NISTMember), { "UpdatedBy": _this.userId });
            _this.setState({ NISTMember: currentSQState });
        };
        // update a member information or delete
        _this.editMember = function (url, postData, action) {
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
                    _this.setState({ NISTMember: responseData });
                    alert(_this.state.NISTMember.FirstName + ' ' + _this.state.NISTMember.LastName + "'s has been " + action + "ed successfully");
                    console.log(_this.state.NISTMember);
                }
            }).catch(function (error) {
                // do something
                alert(error.message);
            });
        };
        // set default values in state
        _this.handleClear = function () {
            _this.setState({
                NISTMember: {
                    Id: 0,
                    LastName: '',
                    FirstName: '',
                    MiddleName: '',
                    Gender: '',
                    Location: '',
                    PhoneNo: '',
                    Email: '',
                    Remarks: '',
                    CreatedBy: '',
                    CreatedDate: '',
                    UpdatedBy: '',
                    UpdatedDate: ''
                },
                Location: [{
                        Id: 0,
                        LookupName: ''
                    }],
                Email: {
                    From: 'DoNotReply@Nist.gov',
                    To: [''],
                    CC: [''],
                    BCC: ['Nist@Nist.gov'],
                    Subject: '',
                    Body: ''
                }, Gender: ['Male', 'Female', 'Unknown'], show: false, canSave: false
            });
        };
        _this.userId = PracticeUtilities_1.getUserId();
        return _this;
    }
    MemberUpdatePopup.prototype.render = function () {
        var _this = this;
        return (React.createElement(core_1.Grid, { container: true, item: true, xs: 12, style: { textAlign: "left" } },
            React.createElement(core_1.Grid, { item: true, xs: 12, className: "textRight" },
                React.createElement(core_1.Button, { variant: "contained", color: "primary", onClick: function () { _this.handleShow(); }, className: "imgButton btnImgUpdate marginLeft5", "data-toggle": "tooltip", title: "Update Member Information" },
                    React.createElement("img", { src: window.location.origin + '/images/edit_white.png', className: "btnImage" })),
                React.createElement(core_1.Button, { variant: 'contained', color: "secondary", onClick: function () { window.confirm('Are you sure you wish to delete this Member?') && _this.handleDelete(_this.props.NISTMember.Id); }, "data-toggle": "tooltip", title: "Delete Member Information", className: "imgButton btnImgDelete marginLeft5" },
                    React.createElement("img", { src: window.location.origin + '/images/delete_white.png', className: "btnImage" }))),
            React.createElement(core_1.Modal, { className: "insertModal", open: this.state.show, onClose: this.handleClose, disableBackdropClick: true },
                React.createElement(core_1.Paper, { className: "ModalDiv" },
                    React.createElement(core_1.Grid, { container: true, spacing: 2 },
                        React.createElement(core_1.Grid, { item: true, xs: 12, sm: 4 },
                            React.createElement(core_1.TextField, { name: "LastName", id: this.state.NISTMember.LastName && this.state.NISTMember.LastName.length > 0 ? '' : 'requireFieldLabel', placeholder: "Last Name", value: this.state.NISTMember.LastName, onChange: this.handleChange, helperText: "* Last Name", inputProps: { maxLength: 50 } })),
                        React.createElement(core_1.Grid, { item: true, xs: 12, sm: 4 },
                            React.createElement(core_1.TextField, { name: "FirstName", id: this.state.NISTMember.FirstName && this.state.NISTMember.FirstName.length > 0 ? '' : 'requireFieldLabel', placeholder: "First Name", value: this.state.NISTMember.FirstName, onChange: this.handleChange, helperText: "* First Name", inputProps: { maxLength: 50 } })),
                        React.createElement(core_1.Grid, { item: true, xs: 12, sm: 4 },
                            React.createElement(core_1.TextField, { name: "MiddleName", placeholder: "Middle Name", value: this.state.NISTMember.MiddleName, onChange: this.handleChange, helperText: "* Middle Name", inputProps: { maxLength: 50 } })),
                        React.createElement(core_1.Grid, { item: true, xs: 12, sm: 4 },
                            React.createElement(core_1.FormControl, { variant: "outlined", className: "selectForm", style: { width: '100%' } },
                                React.createElement(core_1.InputLabel, { style: { fontSize: 13 } }, "Location"),
                                React.createElement(core_1.Select, { name: "Location", label: "Location", value: this.state.NISTMember.Location, onChange: this.handleChange },
                                    React.createElement(core_1.MenuItem, { value: "" },
                                        React.createElement("em", null, "Select One")),
                                    this.state.Location.map(function (item) { return (React.createElement(core_1.MenuItem, { key: item.Id, value: item.LookupName },
                                        React.createElement("em", null, item.LookupName))); })))),
                        React.createElement(core_1.Grid, { item: true, xs: 12, sm: 4 },
                            React.createElement(core_1.FormControl, { variant: "outlined", className: "selectForm", style: { width: '100%' } },
                                React.createElement(core_1.InputLabel, { style: { fontSize: 13 } }, "Gender"),
                                React.createElement(core_1.Select, { name: "Gender", label: "Gender", value: this.state.NISTMember.Gender, onChange: this.handleChange },
                                    React.createElement(core_1.MenuItem, { value: "" },
                                        React.createElement("em", null, "Select One")),
                                    this.state.Gender.map(function (item) { return (React.createElement(core_1.MenuItem, { value: item },
                                        React.createElement("em", null, item))); })))),
                        React.createElement(core_1.Grid, { item: true, xs: 12, sm: 4 },
                            React.createElement(core_1.TextField, { name: "PhoneNo", placeholder: "Phone Number", value: this.state.NISTMember.PhoneNo, onChange: this.handleChange, helperText: "Phone Number", inputProps: { maxLength: 10 } })),
                        React.createElement(core_1.Grid, { item: true, xs: 12 },
                            React.createElement(core_1.TextField, { name: "Email", placeholder: "Email", value: this.state.NISTMember.Email, onChange: this.handleChange, helperText: "Email", inputProps: { maxLength: 150 } })),
                        React.createElement(core_1.Grid, { item: true, xs: 12 },
                            React.createElement(core_1.FormControl, { variant: "outlined", className: "selectForm", style: { width: '100%' } },
                                React.createElement(core_1.TextField, { name: "Remarks", id: "filled-multiline-static", label: "Remarks", multiline: true, rows: 5, placeholder: "Remarks", style: { width: '100%' }, value: this.state.NISTMember.Remarks, onChange: this.handleChange }))),
                        React.createElement(core_1.Grid, { className: "textRight", item: true, xs: 12 },
                            React.createElement(core_1.Button, { variant: 'contained', color: "primary", onClick: function () { _this.handleSubmit(); }, disabled: !this.state.canSave }, "Submit"),
                            React.createElement(core_1.Button, { variant: 'contained', color: "default", onClick: function () { _this.handleClear(); _this.handleClose(); } }, "Close")))))));
    };
    return MemberUpdatePopup;
}(React.Component));
exports.MemberUpdatePopup = MemberUpdatePopup;
//# sourceMappingURL=MemberUpdatePopup.js.map