import Moment from "moment";
import 'moment/locale/pt-br';

Moment.locale('pt-br')
    
function getTimeFromNow(date) {
    return Moment(date).fromNow()
}

export {
    getTimeFromNow
} 