import Moment from "moment";

Moment.locale('pt-br')

function getTimeFromNow(date) {
    return Moment(date).fromNow()
}

export {
    getTimeFromNow
} 