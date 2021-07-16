import { sendRequest } from './index';

export const getCurrency = () => {
    return sendRequest('rates?ondate=2016-7-6&periodicity=0');
};

