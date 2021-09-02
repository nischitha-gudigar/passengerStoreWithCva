import { createAction } from '@ngrx/store';
import { props } from '@ngrx/store';
import { PaymentDetails } from './payment-details.state';
export const setPaymentDetails = createAction(
  'SETPAYMENT',
  props<{ paymentDetails: PaymentDetails }>()
);
export const resetPaymentDetails = createAction('RESETPAYMENT');
