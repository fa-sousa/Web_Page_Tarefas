import request from 'request';

_EXTERNAL_URL = 'https://jsonplaceholder.typicode.com/todos';

const callExternalApiUsingRequest = (callback) => {
    request(_EXTERNAL_URL, { json: true}, (err, res, body) => {
        if (err) {
            return callback(err);
        }
        return callback(body);
    });
}

export const callApi = callExternalApiUsingRequest;