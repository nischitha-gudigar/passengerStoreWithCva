import { createReducer, on } from '@ngrx/store';
import {
  resetPassengerDetails,
  setPassengerDetails
} from './passenger-details.actions';
import { PassengerDetails } from './passenger-details.state';

const initialState: PassengerDetails = null;

export const passengerReducer = createReducer(
  initialState,
  on(setPassengerDetails, (state, action) => {
    return { ...state, ...action.passengerDetails };
  }),
  on(resetPassengerDetails, (state, action) => {
    return (state = null);
  })
);
