import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { resetPassengerDetails } from '../passenger-store/passenger-details.actions';
import { SummaryService } from '../summary.service';

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.css']
})
export class PassengerComponent implements OnInit {
  passengerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private summarySerivice: SummaryService,
    private store: Store
  ) {}

  private setValidations(): void {
    const firstNameValidator = [Validators.required, Validators.maxLength(12)];
    const lastNameValidator = [Validators.required, Validators.maxLength(10)];
    const emailValidator = [Validators.required, Validators.email];
    const phoneValidator = [
      Validators.required,
      Validators.pattern('^[0-9_-]{8,12}')
    ];
    const addressValidator = [Validators.required];
    this.passengerForm.controls['firstName'].setValidators(firstNameValidator);
    this.passengerForm.controls['lastName'].setValidators(lastNameValidator);
    this.passengerForm.controls['email'].setValidators(emailValidator);
    this.passengerForm.controls['phone'].setValidators(phoneValidator);
    this.passengerForm.controls['address'].setValidators(addressValidator);
  }

  ngOnInit(): void {
    this.passengerForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      phone: [''],
      address: ['']
    });
    this.setValidations();
  }

  public saveForm(details) {
    this.summarySerivice.setDetails(details);
    this.route.navigate(['/payment']);
  }

  public clearData() {
    this.passengerForm.reset;
    this.store.dispatch(resetPassengerDetails());
  }
}
