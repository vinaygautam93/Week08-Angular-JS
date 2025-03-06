import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bridgeLabzLogo: string = 'https://github.com/user-attachments/assets/90074df5-7d3c-43fb-ad0b-481cfb1c8407';
  bridgeLabzUrl: string = 'https://www.bridgelabz.com';

  openBridgeLabz() {
    window.open(this.bridgeLabzUrl, '_blank');
  }
}
