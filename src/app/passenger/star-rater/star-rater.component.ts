import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-star-rater',
  templateUrl: 'star-rater.component.html',
  styleUrls: ['star-rater.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StarRaterComponent),
      multi: true
    }
  ]
})
export class StarRaterComponent implements ControlValueAccessor {
  public ratings = [
    {
      stars: 1
    },
    {
      stars: 2
    },
    {
      stars: 3
    },
    {
      stars: 4
    },
    {
      stars: 5
    }
  ];
  public disabled: boolean;
  public ratingText: string;
  public _value: number;

  onChanged: any = () => {};
  onTouched: any = () => {};

  writeValue(val) {
    this._value = val;
  }

  registerOnChange(fn: any) {
    this.onChanged = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  setRating(star: any) {
    if (!this.disabled) {
      this._value = star.stars;
      this.ratingText = star.text;
      this.onChanged(star.stars);
      this.onTouched();
    }
  }
}
