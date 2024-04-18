import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-resume',
  templateUrl: './admin-resume.component.html',
  styleUrls: ['./admin-resume.component.scss']
})
export class AdminResumeComponent {

  isShipmentsOpen = true;
  isPackingOpen = false; 

  showShipments(){
    this.isShipmentsOpen = true;
    this.isPackingOpen = false;
  }

  showPacking(){
    this.isShipmentsOpen = false;
    this.isPackingOpen = true;
  }

}
