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
exports.PracticeMain = void 0;
var React = __importStar(require("react"));
var PracticeUtilities_1 = require("../utilities/PracticeUtilities");
var core_1 = require("@material-ui/core");
var PracticeMain = /** @class */ (function (_super) {
    __extends(PracticeMain, _super);
    function PracticeMain(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            NISTMember: [{
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
                }],
            SearchMember: {
                SearchString: '',
                Location: '',
                StartDate: '',
                EndDate: new Date((new Date()).valueOf() + 1000 * 60 * 60 * 24).toISOString()
            },
            Location: [{
                    Id: 0,
                    LookupName: ''
                }],
            message: 'Welcom to Practice Page'
        };
        _this.memberInsertPopup = React.createRef();
        _this.memberUpdatePopup = React.createRef();
        // get the list of locations and set Location state
        _this.getLocation = function () {
            _this.getData(PracticeUtilities_1.baseApiUrl() + 'NISTLookup?lookupType=Location', 'Location');
        };
        // Search Member
        _this.handleSubmit = function () {
            _this.getMembers(PracticeUtilities_1.baseApiUrl() + 'NISTMember/Search');
        };
        // set SearchMember state
        _this.handleChange = function (event) {
            var _a;
            var target = event.target;
            var value = target.type === 'checkbox' ? target.cheked : target.value;
            var name = target.name;
            var currentState = __assign(__assign({}, _this.state.SearchMember), (_a = {}, _a[name] = value, _a));
            _this.setState({ SearchMember: currentState });
        };
        // set defalut values in state
        _this.handleClear = function () {
            _this.setState({
                NISTMember: [{
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
                    }],
                SearchMember: {
                    SearchString: '',
                    Location: '',
                },
                Email: {
                    From: 'DoNotReply@Nist.gov',
                    To: [''],
                    CC: [''],
                    BCC: ['Nist@Nist.gov'],
                    Subject: '',
                    Body: ''
                },
                Location: [{
                        Id: 0,
                        Location: ''
                    }],
                message: 'Welcom to Practice Page'
            });
            _this.getLocation();
        };
        // get data by url and set state
        _this.getData = function (url, stateType) {
            var getRequestOptions = {
                method: 'GET',
                credentials: 'include'
            };
            fetch(url, getRequestOptions).then(function (res) {
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
                if (Array.isArray(responseData)) {
                    if (stateType === 'Location')
                        _this.setState({ Location: responseData });
                }
                else
                    alert(responseData);
            }).catch(function (error) {
                // do something
                alert(error.message);
            });
        };
        _this.getMembers = function (url) {
            console.log(url);
            var postRequestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: PracticeUtilities_1.serializeData(_this.state.SearchMember)
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
                if (Array.isArray(responseData)) {
                    _this.setState({ NISTMember: responseData });
                }
            }).catch(function (error) {
                // do something
                alert(error.message);
            });
        };
        return _this;
    }
    // Practice Main Page
    PracticeMain.prototype.render = function () {
        return (React.createElement(core_1.Paper, null,
            React.createElement(core_1.Grid, { container: true, spacing: 2 },
                React.createElement(core_1.Grid, { item: true, xs: 12, style: { backgroundColor: 'darkred', color: "white", textAlign: "center" } },
                    React.createElement("h5", { style: { width: "100%" } }, "Create a New Trip")),
                React.createElement(core_1.Grid, { item: true, xs: 4 },
                    React.createElement(core_1.TextField, { name: "Rank", onChange: this.handleChange, placeholder: "Enter Traveler Name", helperText: "* Traveler Name", inputProps: { maxLength: 150, readOnly: true } })),
                React.createElement(core_1.Grid, { item: true, xs: 6 },
                    React.createElement(core_1.TextField, { name: "Rank", onChange: this.handleChange, placeholder: "Enter Traveler Organization", helperText: "* Traveler Organization", inputProps: { maxLength: 150, readOnly: true } })),
                React.createElement(core_1.Grid, { item: true, xs: 6 },
                    React.createElement(core_1.TextField, { name: "Rank", onChange: this.handleChange, placeholder: "Enter Traveler Email", helperText: "* Traveler Email", inputProps: { maxLength: 150, readOnly: true } })),
                React.createElement(core_1.Grid, { item: true, xs: 12, sm: 4 },
                    React.createElement(core_1.FormControl, { variant: "outlined", className: "selectForm", style: { width: '100%' } },
                        React.createElement(core_1.InputLabel, { id: "demo-simple-select-outlined-label", style: { fontSize: 13 } }, "Who is traveling?"),
                        React.createElement(core_1.Select, { name: "Location", label: "Who is traveling?", value: this.state.SearchMember.Location, onChange: this.handleChange },
                            React.createElement(core_1.MenuItem, { value: "" },
                                React.createElement("em", null, "Select One")),
                            React.createElement(core_1.MenuItem, null,
                                React.createElement("em", null, "Wen, Tony")),
                            React.createElement(core_1.MenuItem, null,
                                React.createElement("em", null, "NIST Employee/Assoc")),
                            React.createElement(core_1.MenuItem, null,
                                React.createElement("em", null, "Invitational Travel"))))),
                React.createElement(core_1.Grid, { item: true, xs: 12, sm: 4 },
                    React.createElement(core_1.FormControl, { variant: "outlined", className: "selectForm", style: { width: '100%' } },
                        React.createElement(core_1.InputLabel, { id: "demo-simple-select-outlined-label", style: { fontSize: 13 } }, "Staff Member"),
                        React.createElement(core_1.Select, { name: "Location", label: "Staff Member", value: this.state.SearchMember.Location, onChange: this.handleChange },
                            React.createElement(core_1.MenuItem, { value: "" },
                                React.createElement("em", null, "Select One")),
                            React.createElement(core_1.MenuItem, null,
                                React.createElement("em", null, "boblitt, Megan")),
                            React.createElement(core_1.MenuItem, null,
                                React.createElement("em", null, "Spangler, Megan N.")),
                            React.createElement(core_1.MenuItem, null,
                                React.createElement("em", null, "Kellerher, Megan"))))),
                React.createElement(core_1.Grid, { item: true, xs: 12, sm: 4 },
                    React.createElement(core_1.FormControl, { variant: "outlined", className: "selectForm", style: { width: '100%' } },
                        React.createElement(core_1.InputLabel, { id: "demo-simple-select-outlined-label", style: { fontSize: 13 } }, "Plan/Details"),
                        React.createElement(core_1.Select, { name: "Location", label: "Plan/Detail", value: this.state.SearchMember.Location, onChange: this.handleChange },
                            React.createElement(core_1.MenuItem, { value: "" },
                                React.createElement("em", null, "Select One")),
                            React.createElement(core_1.MenuItem, null,
                                React.createElement("em", null, "Rough Estimate")),
                            React.createElement(core_1.MenuItem, null,
                                React.createElement("em", null, "Full Cost Detail"))))),
                React.createElement(core_1.Grid, { item: true, xs: 12, style: { backgroundColor: 'darkred', color: "white", textAlign: "center" } },
                    React.createElement("h5", { style: { width: "100%" } }, "Second Header")),
                React.createElement(core_1.Grid, { item: true, xs: 12, style: { backgroundColor: 'lightblue', minHeight: "100px" } },
                    React.createElement("h5", { style: { width: "100%", color: "darkblue" } }, "Create a New Trip")),
                React.createElement(core_1.Grid, { item: true, xs: 12, style: { backgroundColor: 'darkred', color: "white", textAlign: "center", marginTop: "20px" } },
                    React.createElement("h5", { style: { width: "100%" } }, "Third Header")),
                React.createElement(core_1.Grid, { item: true, xs: 12, style: { backgroundColor: 'lightblue', minHeight: "100px" } },
                    React.createElement("h5", { style: { width: "100%", color: "darkblue" } }, "Create a New Trip")),
                React.createElement(core_1.Grid, { item: true, xs: 12, style: { borderTop: "solid 5px black", minHeight: "400px", marginTop: "20px" } },
                    React.createElement("h5", null, "About the site")))));
    };
    PracticeMain.prototype.componentDidMount = function () {
        this.getLocation();
        this.getMembers(PracticeUtilities_1.baseApiUrl() + 'NISTMember/Search');
    };
    return PracticeMain;
}(React.Component));
exports.PracticeMain = PracticeMain;
//# sourceMappingURL=PracticeMain.js.map