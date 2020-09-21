import {combineEpics} from 'redux-observable';

import authenEpic from './authenEpic';

export default combineEpics(authenEpic);
