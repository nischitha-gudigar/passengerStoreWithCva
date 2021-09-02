import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SummaryService } from '../summary.service';
@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.css']
})
export class PassengerDetailsComponent implements OnInit {
  @Input() passengerSummary: FormGroup[];
  constructor(private summaryService: SummaryService) {}
  ngOnInit() {
    if (!this.passengerSummary) {
      this.passengerSummary = this.summaryService.getDetails();
    }
  }
}
