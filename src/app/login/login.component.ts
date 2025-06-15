import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) { }

  onLogin() {
    if (this.username === 'admin' && this.password === '1234') {
      alert('Login successful!');
      // Redirect to dashboard or home page
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid username or password.');
    }
  }
}

