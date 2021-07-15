import moment from 'moment';
import { DATE_FORMATS } from '../constants/dates';

export const addDate = (date = new Date(), count, units) => {
    return moment(date).add(count, units);
};

export const subtrDate = (date = new Date(), count, units) => {
    return moment(date).subtract(count, units);
};

export const formatDate = (date = new Date(), format = DATE_FORMATS.fullDate) => {
    return moment(date).format(format);
};

export const getCurrentDate = () => moment();

export const getDifference = (dateOne, dateTwo, unit) => {
    const momentDateOne = moment(dateOne);
    const momentDateTwo = moment(dateTwo);

    if (momentDateOne < momentDateTwo) {
        return momentDateTwo.diff(momentDateOne, unit);
    }

    return momentDateOne.diff(momentDateTwo, unit);
};