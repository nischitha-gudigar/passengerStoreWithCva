import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PassengerComponent } from './passenger/passenger.component';
import { RouterModule } from '@angular/router';
import { PaymentComponent } from './payment/payment.component';
import { SummaryService } from './summary.service';
import { PassengerDetailsComponent } from './passenger-summary/passenger-details.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { paymentReducer } from './payment-store/payment-details.reducer';
import { passengerReducer } from './passenger-store/passenger-details.reducers';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'passenger', component: PassengerComponent },
      { path: '', redirectTo: 'passenger', pathMatch: 'full' },
      { path: 'payment', component: PaymentComponent }
    ]),
    StoreModule.forRoot({
      passengerDetails: passengerReducer,
      paymentDetails: paymentReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
  ],
  declarations: [
    AppComponent,
    PassengerComponent,
    PassengerDetailsComponent,
    PaymentComponent
  ],
  providers: [SummaryService],
  bootstrap: [AppComponent]
})
export class AppModule {}
