import {Observable} from 'rxjs';

import {Constants} from 'helpers';
import ClientService from 'controllers/ClientServer';

export default (action$, store, dependencies) => {
  const login$ = action$
    .ofType(Constants.ACTION_TYPES.LOGIN)
    .switchMap((action) => {
      return Observable.fromPromise(ClientService.login(action.payload))
        .takeUntil(action$.ofType(Constants.ACTION_TYPES.CANCEL_LOGIN))
        .mergeMap((response) => {
          try {
            if (response.status === 200) {
              return Observable.concat(
                Observable.of({
                  type: Constants.ACTION_TYPES.LOGIN_SUCCESS,
                  payload: {username: action.payload.username},
                }),
                Observable.of({
                  type: Constants.ACTION_TYPES.REPLACE,
                  payload: {routeName: Constants.RouteKey.MainStack},
                }),
              );
            } else {
              return Observable.concat(
                Observable.of({
                  type: Constants.ACTION_TYPES.LOGIN_FAIL,
                }),
              );
            }
          } catch (error) {
            return Observable.concat(
              Observable.of({type: Constants.ACTION_TYPES.LOGIN_FAIL}),
            );
          }
        });
    });

  return Observable.merge(login$);
};
