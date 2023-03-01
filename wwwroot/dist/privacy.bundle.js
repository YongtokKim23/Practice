/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/privacy.tsx":
/*!*************************!*\
  !*** ./src/privacy.tsx ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var ReactDOM = __importStar(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));
var PrivacyApp_1 = __webpack_require__(/*! ./privacy/PrivacyApp */ "./src/privacy/PrivacyApp.tsx");
ReactDOM.render(React.createElement(PrivacyApp_1.PrivacyApp, null), document.getElementById('privacy'));


/***/ }),

/***/ "./src/privacy/PrivacyApp.tsx":
/*!************************************!*\
  !*** ./src/privacy/PrivacyApp.tsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrivacyApp = void 0;
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var PrivacyMain_1 = __webpack_require__(/*! ./PrivacyMain */ "./src/privacy/PrivacyMain.tsx");
var PracticeUtilities_1 = __webpack_require__(/*! ../utilities/PracticeUtilities */ "./src/utilities/PracticeUtilities.tsx");
var PrivacyApp = /** @class */ (function (_super) {
    __extends(PrivacyApp, _super);
    function PrivacyApp(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { UserName: '' };
        return _this;
    }
    PrivacyApp.prototype.render = function () {
        return (React.createElement(PrivacyMain_1.PrivacyMain, { UserName: this.state.UserName }));
    };
    PrivacyApp.prototype.componentWillMount = function () {
        this.setState({ UserName: (0, PracticeUtilities_1.getUserName)() });
    };
    return PrivacyApp;
}(React.Component));
exports.PrivacyApp = PrivacyApp;


/***/ }),

/***/ "./src/privacy/PrivacyMain.tsx":
/*!*************************************!*\
  !*** ./src/privacy/PrivacyMain.tsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrivacyMain = void 0;
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var core_1 = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
function TabPanel(props) {
    var children = props.children, value = props.value, index = props.index, other = __rest(props, ["children", "value", "index"]);
    return (React.createElement("div", __assign({ role: "tabpanel", hidden: value !== index, id: "vertical-tabpanel-".concat(index), "aria-labelledby": "vertical-tab-".concat(index) }, other), value === index && (React.createElement(core_1.Box, { p: 3 },
        React.createElement(core_1.Typography, null, children)))));
}
function a11yProps(index) {
    return {
        id: "vertical-tab-".concat(index),
        'aria-controls': "vertical-tabpanel-".concat(index),
    };
}
var PrivacyMain = /** @class */ (function (_super) {
    __extends(PrivacyMain, _super);
    function PrivacyMain(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            Lookup: [{
                    Id: 0,
                    LookupType: '',
                    LookupName: '',
                    LookupDesc: ''
                }],
            message: 'Welcom on this page',
            selectedTab: 0
        };
        return _this;
    }
    PrivacyMain.prototype.render = function () {
        var _this = this;
        var handleChange = function (event, newValue) {
            _this.setState({ selectedTab: newValue });
        };
        return (React.createElement(core_1.Paper, null,
            React.createElement(core_1.Grid, { container: true },
                React.createElement(core_1.Grid, { item: true, xs: 12 },
                    React.createElement(core_1.Tabs, { onChange: handleChange, value: this.state.selectedTab, "aria-label": " simple tabs", style: { borderRight: '1px solid lightgray' } },
                        React.createElement(core_1.Tab, __assign({ value: 0, className: "ReferenceBox" }, a11yProps(0), { label: "General Info" })),
                        React.createElement(core_1.Tab, __assign({ value: 1, className: "ReferenceBox" }, a11yProps(1), { label: "Destination" })),
                        React.createElement(core_1.Tab, __assign({ value: 2, className: "ReferenceBox" }, a11yProps(2), { label: "Conference" })))),
                React.createElement(core_1.Grid, { item: true, xs: 12 },
                    React.createElement(TabPanel, { value: this.state.selectedTab, index: 0 },
                        React.createElement(core_1.Grid, { container: true },
                            React.createElement(core_1.Grid, { item: true, xs: 12, style: { backgroundColor: 'darkred', color: "white", textAlign: "center" } },
                                React.createElement("h5", { style: { width: "100%" } }, "General Trip Information")),
                            React.createElement(core_1.Grid, { item: true, xs: 6 },
                                React.createElement("span", null,
                                    React.createElement("strong", null, "Traveler:"),
                                    " Wen, Tony")),
                            React.createElement(core_1.Grid, { item: true, xs: 6 },
                                React.createElement(core_1.TextField, { name: "Rank", placeholder: "Enter Trip Number (from E2)", helperText: "Trip ID # (from E2)", inputProps: { maxLength: 150, readOnly: true } })),
                            React.createElement(core_1.Grid, { item: true, xs: 3 },
                                React.createElement("span", null,
                                    React.createElement("strong", null, "Trip Req #:"),
                                    " ")),
                            React.createElement(core_1.Grid, { item: true, xs: 3 },
                                React.createElement("span", null,
                                    React.createElement("strong", null, "Status:"),
                                    " Full Cost Detail")),
                            React.createElement(core_1.Grid, { item: true, xs: 6 },
                                React.createElement(core_1.TextField, { name: "Rank", placeholder: "Enter Record Locator #", helperText: "Record Locator #", inputProps: { maxLength: 150, readOnly: true } })),
                            React.createElement(core_1.Grid, { item: true, xs: 12 },
                                React.createElement(core_1.TextField, { name: "Rank", placeholder: "Enter Benefits To NIST", helperText: "* Benefit To NIST", inputProps: { maxLength: 150, readOnly: true } })),
                            React.createElement(core_1.Grid, { item: true, xs: 12, style: { marginBottom: "20px" } },
                                React.createElement(core_1.TextField, { name: "Rank", placeholder: "Enter General Comments/Notes #", helperText: "* General Trip Comments/Notes", inputProps: { maxLength: 150, readOnly: true } })),
                            React.createElement(core_1.Grid, { item: true, xs: 12, sm: 4 },
                                React.createElement(core_1.FormControl, { variant: "outlined", className: "selectForm", style: { width: '100%' } },
                                    React.createElement(core_1.InputLabel, { id: "demo-simple-select-outlined-label", style: { fontSize: 13 } }, "Who is traveling?"),
                                    React.createElement(core_1.Select, { name: "Location", label: "Who is traveling?", value: 0 },
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
                                    React.createElement(core_1.Select, { name: "Location", label: "Staff Member", value: 0 },
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
                                    React.createElement(core_1.Select, { name: "Location", label: "Plan/Detail", value: 0 },
                                        React.createElement(core_1.MenuItem, { value: "" },
                                            React.createElement("em", null, "Select One")),
                                        React.createElement(core_1.MenuItem, null,
                                            React.createElement("em", null, "Rough Estimate")),
                                        React.createElement(core_1.MenuItem, null,
                                            React.createElement("em", null, "Full Cost Detail"))))),
                            React.createElement(core_1.Grid, { item: true, xs: 12, style: { textAlign: "right" } },
                                React.createElement(core_1.Button, { variant: "outlined", color: "primary" }, "Next")))),
                    React.createElement(TabPanel, { value: this.state.selectedTab, index: 1 },
                        React.createElement(core_1.Grid, { container: true },
                            React.createElement(core_1.Grid, { item: true, xs: 12, style: { backgroundColor: 'darkred', color: "white", textAlign: "center" } },
                                React.createElement("h5", { style: { width: "100%" } }, "Destination & Lodging Information")),
                            React.createElement(core_1.Grid, { item: true, xs: 6 },
                                React.createElement("span", null,
                                    React.createElement("strong", null, "Traveler:"),
                                    " Wen, Tony")),
                            React.createElement(core_1.Grid, { item: true, xs: 6 },
                                React.createElement(core_1.TextField, { name: "Rank", placeholder: "Enter Trip Number (from E2)", helperText: "Trip ID # (from E2)", inputProps: { maxLength: 150, readOnly: true } })),
                            React.createElement(core_1.Grid, { item: true, xs: 3 },
                                React.createElement("span", null,
                                    React.createElement("strong", null, "Trip Req #:"),
                                    " ")),
                            React.createElement(core_1.Grid, { item: true, xs: 3 },
                                React.createElement("span", null,
                                    React.createElement("strong", null, "Status:"),
                                    " Full Cost Detail")),
                            React.createElement(core_1.Grid, { item: true, xs: 6 },
                                React.createElement(core_1.TextField, { name: "Rank", placeholder: "Enter Record Locator #", helperText: "Record Locator #", inputProps: { maxLength: 150, readOnly: true } })),
                            React.createElement(core_1.Grid, { item: true, xs: 12 },
                                React.createElement(core_1.TextField, { name: "Rank", placeholder: "Enter Benefits To NIST", helperText: "* Benefit To NIST", inputProps: { maxLength: 150, readOnly: true } })),
                            React.createElement(core_1.Grid, { item: true, xs: 12, style: { marginBottom: "20px" } },
                                React.createElement(core_1.TextField, { name: "Rank", placeholder: "Enter General Comments/Notes #", helperText: "* General Trip Comments/Notes", inputProps: { maxLength: 150, readOnly: true } })),
                            React.createElement(core_1.Grid, { item: true, xs: 12, sm: 4 },
                                React.createElement(core_1.FormControl, { variant: "outlined", className: "selectForm", style: { width: '100%' } },
                                    React.createElement(core_1.InputLabel, { id: "demo-simple-select-outlined-label", style: { fontSize: 13 } }, "Who is traveling?"),
                                    React.createElement(core_1.Select, { name: "Location", label: "Who is traveling?", value: 0 },
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
                                    React.createElement(core_1.Select, { name: "Location", label: "Staff Member", value: 0 },
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
                                    React.createElement(core_1.Select, { name: "Location", label: "Plan/Detail", value: 0 },
                                        React.createElement(core_1.MenuItem, { value: "" },
                                            React.createElement("em", null, "Select One")),
                                        React.createElement(core_1.MenuItem, null,
                                            React.createElement("em", null, "Rough Estimate")),
                                        React.createElement(core_1.MenuItem, null,
                                            React.createElement("em", null, "Full Cost Detail"))))),
                            React.createElement(core_1.Grid, { item: true, xs: 6, style: { textAlign: "left" } },
                                React.createElement(core_1.Button, { variant: "outlined", color: "secondary" }, "Previous")),
                            React.createElement(core_1.Grid, { item: true, xs: 12, style: { textAlign: "right" } },
                                React.createElement(core_1.Button, { variant: "outlined", color: "primary" }, "Next")))),
                    React.createElement(TabPanel, { value: this.state.selectedTab, index: 2 },
                        React.createElement(core_1.Grid, { item: true, xs: 12, style: { backgroundColor: 'darkred', color: "white", textAlign: "center" } },
                            React.createElement("h5", { style: { width: "100%" } }, "Conference Information")))))));
    };
    return PrivacyMain;
}(React.Component));
exports.PrivacyMain = PrivacyMain;


/***/ }),

/***/ "./src/utilities/PracticeUtilities.tsx":
/*!*********************************************!*\
  !*** ./src/utilities/PracticeUtilities.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.checkEmail = exports.onlyNubers = exports.getUserName = exports.getUserId = exports.serializeData = exports.postRequest = exports.getRequest = exports.baseApiUrl = void 0;
// return base API url
var baseApiUrl = function () {
    var protocol = window.location.protocol;
    var hostname = window.location.hostname;
    if (hostname === 'localhost')
        return protocol + '//' + hostname + ':44350/api/';
    else
        return protocol + '//' + hostname + 'APIs/PracticeApi/api/';
};
exports.baseApiUrl = baseApiUrl;
// Get Request
// Request Options
var getRequestOptions = {
    method: 'GET',
    credentials: 'include'
};
var getRequest = function (url) {
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
        console.log(responseData);
        return responseData;
    }).catch(function (error) {
        // do something
        // alert(error.message);
    });
};
exports.getRequest = getRequest;
// POST Request
var postRequestOptions = function (postData) {
    var postRequestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: (0, exports.serializeData)(postData)
    };
    return postRequestOptions;
};
var postRequest = function (url, postData) {
    fetch(url, postRequestOptions(postData)).then(function (res) {
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
        //console.log(responseData);
        return responseData;
    }).catch(function (error) {
        // do something
        // alert(error.message);
    });
};
exports.postRequest = postRequest;
// serialze JSON data to form data
var serializeData = function (data) {
    var buffer = [];
    for (var i in data) {
        var value = data[i];
        buffer.push(encodeURIComponent(i) + '=' + encodeURIComponent((value === null) ? '' : value));
    }
    var source = buffer.join('&').replace('/%20/g', '+');
    return source;
};
exports.serializeData = serializeData;
// get user id
var getUserId = function () {
    var userId = document.getElementById('userId').textContent.replace('FFX\\', '');
    return userId;
};
exports.getUserId = getUserId;
// get user name
var getUserName = function () {
    var userName = document.getElementById('userName').textContent;
    return userName;
};
exports.getUserName = getUserName;
// only allow number
var onlyNubers = function (event) { event.target.value = event.target.value.replace(/[^0-9]/g, ''); };
exports.onlyNubers = onlyNubers;
// validate email address
var checkEmail = function (value) {
    if (value && value.length > 0) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(value))
            return true;
        else {
            return false;
        }
    }
};
exports.checkEmail = checkEmail;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"privacy": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkpractice"] = self["webpackChunkpractice"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_material-ui_core_esm_index_js"], () => (__webpack_require__("./src/privacy.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=privacy.bundle.js.map