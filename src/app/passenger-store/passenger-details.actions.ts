import { createAction } from '@ngrx/store';
import { props } from '@ngrx/store';
import { PassengerDetails } from './passenger-details.state';
export const setPassengerDetails = createAction(
  'SETPASSENGER',
  props<{ passengerDetails: PassengerDetails }>()
);
export const resetPassengerDetails = createAction('RESETPASSENGER');
