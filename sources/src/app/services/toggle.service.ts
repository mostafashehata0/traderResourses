import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToggleService {
  constructor() {}
  productToggle() {
    this.selectItem = !this.selectItem;
  }
}
