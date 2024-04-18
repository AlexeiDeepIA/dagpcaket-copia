import { Component } from '@angular/core';

@Component({
  selector: 'app-pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.scss']
})
export class PinComponent {

  showPin = false;

  showNIP(){
    this.showPin = true;
  }

  close(){
    this.showPin = false;
  }

}
