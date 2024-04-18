import { Component, OnInit } from '@angular/core';
import { ChartType, ChartTypeRegistry } from 'chart.js';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-settings-component',
  templateUrl: './settings-component.component.html',
  styleUrls: ['./settings-component.component.scss']
})
export class SettingsComponentComponent implements OnInit {

  public chart: Chart | undefined;

  ngOnInit(): void {
    Chart.register(...registerables); // Registra los controladores y elementos de Chart.js

    const lastMonth = {
      labels: ["Enero", "Febreo", "Marzo", "Abril"],
      datasets: [
        {
          label: "Ingresos del mes pasado",
          data: [1200, 3590, 1098, 2000],
          fill: false,
          borderColor: '#eb6d06',
          tension: 0.4
        }
      ]
    };

    const currentMonth = {
      labels: ["Enero", "Febreo", "Marzo", "Abril"],
      datasets: [
        {
          label: "Ingresos del mes",
          data: [2500, 3590, 3098, 2890],
          fill: false,
          borderColor: '#eb6d06',
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

  basicInfo = true;
  address = false;
  pin = false;
  security = false;

  showBasicInfo(){
    this.basicInfo = true;
    this.address = false;
    this.pin = false;
    this.security = false;
  }

  showAddress(){
    this.basicInfo = false;
    this.address = true;
    this.pin = false;
    this.security = false;
  }

  showPIN(){
    this.basicInfo = false;
    this.address = false;
    this.pin = true;
    this.security = false;
  }

  showSecurity(){
    this.basicInfo = false;
    this.address = false;
    this.pin = false;
    this.security = true;
  }

}
