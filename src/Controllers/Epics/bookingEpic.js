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
          try {
            if (response.status === 200) {
              return Observable.concat(
                Observable.of({
                  type: Constants.ACTION_TYPES.GET_BOOKING_SUCCESS,
                  payload: response.data,
                }),
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

  const createBooking$ = action$
    .ofType(Constants.ACTION_TYPES.CREATE_BOOKING)
    .switchMap((action) => {
      return Observable.fromPromise(ClientService.createBooking(action.payload))
        .takeUntil(action$.ofType(Constants.ACTION_TYPES.CANCLE_CREATE_BOOKING))
        .mergeMap((response) => {
          try {
            if (response.status === 200) {
              return Observable.concat(
                Observable.of({
                  type: Constants.ACTION_TYPES.CREATE_BOOKING_SUCCESS,
                  payload: response.data,
                }),
                Observable.of({
                  type: Constants.ACTION_TYPES.GET_BOOKING,
                  payload: {username: action.payload.created_by},
                }),
                Observable.of({
                  type: Constants.ACTION_TYPES.POP,
                }),
              );
            } else {
              return Observable.concat(
                Observable.of({
                  type: Constants.ACTION_TYPES.CREATE_BOOKING_FAIL,
                }),
              );
            }
          } catch (error) {
            return Observable.concat(
              Observable.of({type: Constants.ACTION_TYPES.CREATE_BOOKING_FAIL}),
            );
          }
        });
    });

  return Observable.merge(getBooking$, createBooking$);
};
