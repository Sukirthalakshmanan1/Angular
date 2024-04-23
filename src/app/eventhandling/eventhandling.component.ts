import { Component } from '@angular/core';

@Component({
  selector: 'app-eventhandling',
  templateUrl: './eventhandling.component.html',
  styleUrl: './eventhandling.component.less'
})
export class EventhandlingComponent {
  notifyme(){
    alert("Alert msg")
  }

}
