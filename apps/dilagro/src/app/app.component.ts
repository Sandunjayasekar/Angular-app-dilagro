import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, LoginComponent, RouterModule, CommonModule],
  selector: 'seng41293-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'dilagro';
  name = 'Sandun';
  frameworks = ['nodejs', 'springboot', 'react'];
  onClick() {
    this.name = 'Fernando';
  }
}
