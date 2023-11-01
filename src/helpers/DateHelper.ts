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

function calculateTimeDifference(pastDate, compareDate = new Date()) {
  const now = new Date(compareDate) as any;
  const then = new Date(pastDate) as any;
  const differenceInMilliseconds = now - then;

  const differenceInSeconds = Math.floor(differenceInMilliseconds / 1000);
  const days = Math.floor(differenceInSeconds / (3600 * 24));
  const hours = Math.floor((differenceInSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((differenceInSeconds % 3600) / 60);
  const seconds = differenceInSeconds % 60;

  return { days, hours, minutes, seconds };
}
function calculateTimeDifferenceString(pastDate, compareDate = new Date()) {
  const date = calculateTimeDifference(pastDate, compareDate);

  return `${String(date.minutes).padStart(2, '0')}:${String(
    date.seconds
  ).padStart(2, '0')}`;
}

export {
  formatDateTimeAsString,
  formatTimeAsString,
  getTimeFromNow,
  getUnixFromDatetime,
  calculateTimeDifference,
  calculateTimeDifferenceString
};
