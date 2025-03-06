import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  //  Import FormsModule for two-way binding
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,  //  Standalone component
  imports: [CommonModule, FormsModule],  //  Import FormsModule directly
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName: string = '';  //  Variable for user input
}
