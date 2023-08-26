import Moment from 'moment';
import 'moment/locale/pt-br';

Moment.locale('pt-br');

function getTimeFromNow(date: string) {
  if (!date) {
    return;
  }
  return Moment(date).fromNow();
}

function formatTimeAsString(date: string) {
  return Moment(date).format('DD/MM/YYYY');
}

function formatDateTimeAsString(date: string) {
  return Moment(date).format('DD/MM/YYYY HH:mm:ss');
}

function getUnixFromDatetime(unix: any) {
  const newDate = unix.toString().substring(0, 10);

  return parseInt(newDate);
}

export {
  formatDateTimeAsString,
  formatTimeAsString,
  getTimeFromNow,
  getUnixFromDatetime
};
