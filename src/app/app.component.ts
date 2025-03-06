import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; //  Import CommonModule for *ngIf

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule], //  Add CommonModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName: string = '';
  errorMessage: string = '';

  validateUserName() {
    const namePattern = /^[A-Z][a-zA-Z]{2,}$/;
    if (!this.userName.match(namePattern)) {
      this.errorMessage = "Invalid name! Start with a capital & use min 3 letters.";
    } else {
      this.errorMessage = "";
    }
  }
}
