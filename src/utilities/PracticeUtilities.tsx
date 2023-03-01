// return base API url
export const baseApiUrl = () => {
    const protocol = window.location.protocol;
    const hostname = window.location.hostname;

    if (hostname === 'localhost')
        return protocol + '//' + hostname + ':44350/api/';
    else
        return protocol + '//' + hostname + 'APIs/PracticeApi/api/';
}

// Get Request
// Request Options
const getRequestOptions: any = {
    method: 'GET',
    credentials: 'include'
};

export const getRequest = (url: string) => {
    fetch(url, getRequestOptions).then(res => {
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
    }).then(responseData => {
        console.log(responseData);
        return responseData;
    }).catch((error) => {
        // do something
        // alert(error.message);
    });
};

// POST Request
const postRequestOptions = (postData: any)  => {
    let postRequestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: serializeData(postData)
    };

    return postRequestOptions;
};

export const postRequest: any = (url: string, postData: any) => {
    fetch(url, postRequestOptions(postData)).then(res => {
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
    }).then(responseData => {
        //console.log(responseData);
        return responseData;
    }).catch((error) => {
        // do something
        // alert(error.message);
    });
};

// serialze JSON data to form data
export const serializeData = (data: any) => {
    var buffer = [];

    for (var i in data) {
        var value = data[i];
        buffer.push(
            encodeURIComponent(i) + '=' + encodeURIComponent((value === null) ? '' : value)
        );
    }

    var source = buffer.join('&').replace('/%20/g', '+');
    return source;
}

// get user id
export const getUserId: any = () => {
    const userId = document.getElementById('userId').textContent.replace('FFX\\', '');
    return userId;
}

// get user name
export const getUserName: any = () => {
    const userName = document.getElementById('userName').textContent;
    return userName;
}

// only allow number
export const onlyNubers = (event: any) => { event.target.value = event.target.value.replace(/[^0-9]/g, '') };

// validate email address
export const checkEmail = (value: string) => {
    if (value && value.length > 0) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(value))
            return true;
        else {
            return false;
        }
    }
}