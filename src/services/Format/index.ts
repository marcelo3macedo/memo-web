import Moment from 'moment';

const defaultFormat = 'DD/MM/YYYY';

function formatDateField(date) {
    return Moment(date).format(defaultFormat);
}

export {
    formatDateField
};