import { Component, OnInit } from '@angular/core';
import { ChartType, ChartTypeRegistry } from 'chart.js';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-licensees-dashboard',
  templateUrl: './licensees-dashboard.component.html',
  styleUrls: ['./licensees-dashboard.component.scss']
})
export class LicenseesDashboardComponent implements OnInit {
  public chart: Chart | undefined;

  isShipmentsOpen = true;
  isPackingOpen = false;
  isServicesOpen = false;
  isRechargesOpen = false;

  showShipments(){
    this.isShipmentsOpen = true;
    this.isPackingOpen = false;
    this.isServicesOpen = false;
    this.isRechargesOpen = false;
  }

  showPacking(){
    this.isShipmentsOpen = false;
    this.isPackingOpen = true;
    this.isServicesOpen = false;
    this.isRechargesOpen = false;
  }

  showServices(){
    this.isShipmentsOpen = false;
    this.isPackingOpen = false;
    this.isServicesOpen = true;
    this.isRechargesOpen = false;
  }

  showRecharges(){
    this.isShipmentsOpen = false;
    this.isPackingOpen = false;
    this.isServicesOpen = false;
    this.isRechargesOpen = true;
  }



  ngOnInit(): void {
    Chart.register(...registerables); // Registra los controladores y elementos de Chart.js

    const lastMonth = {
      labels: ["Enero", "Febreo", "Marzo", "Abril"],
      datasets: [
        {
          label: "Ingresos 2023",
          data: [1200, 3590, 1098, 2000],
          fill: false,
          borderColor: '#eb6d06',
          backgroundColor: ['#eb6d06'], 
          tension: 0.4
        }
      ]
    };

    const currentMonth = {
      labels: ["Enero", "Febreo", "Marzo", "Abril"],
      datasets: [
        {
          label: "Ingresos 2024",
          data: [2500, 3590, 3098, 2890],
          fill: false,
          borderColor: '#eb6d06',
          backgroundColor: ['#eb6d06'], 
          tension: 0.4
        }
      ]
    };

    this.chart = new Chart("lastMonth", {
      type: 'line' as ChartType,
      data: lastMonth
    });

    this.chart = new Chart("currentMonth", {
      type: 'line' as ChartType,
      data: currentMonth
    });
  }
}