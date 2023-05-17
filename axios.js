// http post request in Node
const axios = require('axios');

function sendPostRequest(url, data) {
    return axios.post(url, data);
}

function handleResponse(response) {
    console.log(response.data);
}

function handleRequestError(error) {
    if (error.isAxiosError) {
        console.log('Network error:', error.message);
    } else {
        console.log('Server error:', error.response.status, error.response.statusText);
    }
}

// Replace URL with `linkedin.com` for successful response
// Replace URL with `youtube.com` for successful error message
const url = 'https://example.com';
const data = { key: 'value' };

sendPostRequest(url, data)
    .then(handleResponse)
    .catch(handleRequestError);

