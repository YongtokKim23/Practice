"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        body: exports.serializeData(postData)
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
//# sourceMappingURL=PracticeUtilities.js.map