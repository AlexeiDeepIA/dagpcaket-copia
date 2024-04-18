import { Component } from '@angular/core';

@Component({
  selector: 'app-locker-screen',
  templateUrl: './locker-screen.component.html',
  styleUrls: ['./locker-screen.component.scss']
})
export class LockerScreenComponent {

  texts = [
    {
      title: 'Locker Smart: Tu solución de <span class="text-dagpk font-bold text-5xl"> envío 24/7 </span>',
      description: 'Envia y recibe paquetes a tu convenienvia, en cualquier momento, con nuestros lockers seguros y accesibles. Servicio disponible a nivel nacional e internacional'
    },
    {
      title: 'Ahorra tiempo y energia con <span class="text-dagpk font-bold text-5xl"> Lockers Smart </span>',
      description: 'Realiza tus pagos de servicios y recargas telefónicas de manera rápida y seguro. ¡Todo en un solo lugar!'
    },
    {
      title: 'Enfócate en lo que importa, dejanos los <span class="text-dagpk font-bold text-5xl"> envíos a nosotros </span>',
      description: 'Con nuestros servicios de envío internacional y nacional, puedes tener la tranquilidad de que tus paquetes llegarán a tiempo y en perfectas condiciones'
    }
  ];

  currentIndex = 0;

ngOnInit() {
  setInterval(() => {
    this.currentIndex = (this.currentIndex + 1) % this.texts.length;
  }, 3000); 
}

}
