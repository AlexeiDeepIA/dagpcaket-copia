import { Component } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent {

  selectedOption: string = 'Nacional';
  isInsured: string = 'No asegurado';
  shippingType: string = 'Sobre';
  

  showCity = false; 
  showValue = false; 
  showType = false;
  cotizar = false;

  onOptionChange() {
    if(this.selectedOption === 'Nacional'){
      this.showCity = false;
    } else {
      this.showCity = true;
    }
  }

  hasInsurance(){
    if(this.isInsured == 'No asegurado'){
      this.showValue = false;
    } else {
      this.showValue = true;
    }    
  }

  shipmentType(){
    if(this.shippingType == 'Sobre'){
      this.showType = false;
    } else {
      this.showType = true;
    }
  }

  cotizarEnvio(){
    this.cotizar = true;
  }
 

}
