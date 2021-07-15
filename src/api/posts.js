import { sendRequest } from './index';

export const getPosts = () => {
    return sendRequest('rates?ondate=2016-7-6&periodicity=0');
};

/*export const getPost = id => {
    return sendRequest(`posts/${id}`);
};*/
