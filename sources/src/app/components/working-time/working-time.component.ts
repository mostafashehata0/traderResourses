import { Component } from '@angular/core';

@Component({
  selector: 'app-working-time',
  templateUrl: './working-time.component.html',
  styleUrls: ['./working-time.component.css'],
})
export class WorkingTimeComponent {
  // counter
  hour = 0;
  minute = 0;
  hours: number[] = [];
  minutes: number[] = [];
  // counter
  // starting time
  startingTime: number = 9;
  // days
  days: string[] = ['الاحد', 'الاثنين', 'الثلاثاء', 'الاربعاء', 'الخميس'];
  // toggle
  selectsat: boolean = false;
  selecctFri: boolean = false;

  constructor() {
    for (let i = 0; i < 24; i++) {
      this.hours.push(i);
    }
    for (let i = 0; i < 60; i++) {
      this.minutes.push(i);
    }
  }
  appareSat() {
    this.selectsat = !this.selectsat;
  }
  appareFri() {
    this.selecctFri = !this.selecctFri;
  }
}
