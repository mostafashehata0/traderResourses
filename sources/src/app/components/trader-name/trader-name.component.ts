import { Component } from '@angular/core';

@Component({
  selector: 'app-trader-name',
  templateUrl: './trader-name.component.html',
  styleUrls: ['./trader-name.component.css'],
})
export class TraderNameComponent {
  month: any = 'شهر';
  // select time
  selectTime: boolean = false;
  productAppear() {
    this.selectTime = true;
  }
  productDisappear() {
    this.selectTime = false;
  }
  // select person
  selectPerson: boolean = false;
  personAppear() {
    this.selectPerson = true;
  }
  personDisappear() {
    this.selectPerson = false;
  }
}
