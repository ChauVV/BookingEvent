import {combineEpics} from 'redux-observable';

import authenEpic from './authenEpic';
import bookingEpic from './bookingEpic';

export default combineEpics(authenEpic, bookingEpic);
