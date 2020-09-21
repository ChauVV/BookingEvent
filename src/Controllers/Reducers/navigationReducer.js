import {StackActions} from '@react-navigation/native';
import {navigationRef} from 'ui/Navigations';
import {Constants} from 'helpers';

export default (state = Constants.INIT_STATES.navigator, action) => {
  switch (action.type) {
    case Constants.ACTION_TYPES.PUSH:
      navigationRef.current?.dispatch(
        StackActions.push(action.payload.routeName, action.payload.params),
      );
      return state;
    case Constants.ACTION_TYPES.REPLACE:
      navigationRef.current?.dispatch(
        StackActions.replace(action.payload.routeName, action.payload.params),
      );
      return state;
    case Constants.ACTION_TYPES.POP:
      navigationRef.current?.dispatch(StackActions.back());
      return state;
    default:
      return state;
  }
};
