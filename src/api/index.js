// const baseUrl = process.env.REACT_APP_API_URL;
const baseUrl = 'https://www.nbrb.by/api/exrates';

export const sendRequest = async (
    path,
    method = 'GET',
    body = {},
    headers = {},
) => {
    const requestUrl = `${baseUrl}/${path}`;
    const options = {
        method,
        headers: {
            ...headers,
        }
    };

    if (method === 'POST' || method === 'PUT') {
        options.body = JSON.stringify(body);
    }

    const response = await fetch(requestUrl, options);

    const contentType = response.headers.get('Content-Type');

    if (contentType.includes('application/json')) {
        return await response.json();
    }

    throw new Error('Unexpected content type');
};
