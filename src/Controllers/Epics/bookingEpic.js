import {Observable} from 'rxjs';

import {Constants} from 'helpers';
import ClientService from 'controllers/ClientServer';

export default (action$, store, dependencies) => {
  const getBooking$ = action$
    .ofType(Constants.ACTION_TYPES.GET_BOOKING)
    .switchMap((action) => {
      return Observable.fromPromise(ClientService.getBookings(action.payload))
        .takeUntil(action$.ofType(Constants.ACTION_TYPES.CANCEL_GET_BOOKING))
        .mergeMap((response) => {
          
          console.log('response: ', response);
          try {
            if (response.status === 200) {
              return Observable.concat(
                Observable.of({
                  type: Constants.ACTION_TYPES.GET_BOOKING_SUCCESS,
                  payload: response.data
                })
              );
            } else {
              return Observable.concat(
                Observable.of({
                  type: Constants.ACTION_TYPES.GET_BOOKING_FAIL,
                }),
              );
            }
          } catch (error) {
            return Observable.concat(
              Observable.of({type: Constants.ACTION_TYPES.GET_BOOKING_FAIL}),
            );
          }
        });
    });

  return Observable.merge(getBooking$);
};
