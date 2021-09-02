import { createReducer, on } from '@ngrx/store';
import {
  resetPaymentDetails,
  setPaymentDetails
} from './payment-details.actions';
import { PaymentDetails } from './payment-details.state';

const initialState: PaymentDetails = null;

export const paymentReducer = createReducer(
  initialState,
  on(setPaymentDetails, (state, action) => {
    return { ...state, ...action.paymentDetails };
  }),
  on(resetPaymentDetails, (state, action) => {
    return (state = null);
  })
);
