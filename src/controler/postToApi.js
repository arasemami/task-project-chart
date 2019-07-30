import base from '../api/baseURL';

function PostToApi(data, key) {
    let url  = base.baseUrl + key;
    return fetch(url, {
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    }).then(response => {
        return Promise.all([response.status, response.json()])
    }).then(([res, data]) => {
        return ({'status': res, 'data': data, 'isLoading': false})
    })

}

export default PostToApi;