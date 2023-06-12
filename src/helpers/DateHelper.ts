import Moment from 'moment';
import 'moment/locale/pt-br';

Moment.locale('pt-br');

function getTimeFromNow(date) {
  return Moment(date).fromNow();
}

function formatTimeAsString(date) {
  return Moment(date).format('DD/MM/YYYY');
}

function formatDateTimeAsString(date) {
  return Moment(date).format('DD/MM/YYYY HH:mm:ss');
}

export { formatDateTimeAsString, formatTimeAsString, getTimeFromNow };
