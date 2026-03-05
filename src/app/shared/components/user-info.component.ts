import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '../services/oauth.service';

@Component({
  selector: 'app-user-info',
  standalone: true,
  template: `
    @if (authService.isAuthenticated()) {
      <div class="user-info">
        @if (getUserPicture()) {
          <div class="user-avatar">
            <img [src]="getUserPicture()" [alt]="getUserName()" />
          </div>
        }
        <div class="user-details">
          <span class="user-name">{{ getUserName() }}</span>
          <span class="user-email">{{ getUserEmail() }}</span>
        </div>
        <button class="logout-btn" (click)="logout()">
          <i class="fas fa-sign-out-alt"></i> Sair
        </button>
      </div>
    }
  `,
  styles: [`
    .user-info {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 8px 16px;
      background: #f8f9fa;
      border-radius: 8px;
    }
    
    .user-avatar img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      object-fit: cover;
    }
    
    .user-details {
      display: flex;
      flex-direction: column;
      flex: 1;
    }
    
    .user-name {
      font-weight: 600;
      color: #333;
      font-size: 14px;
    }
    
    .user-email {
      color: #666;
      font-size: 12px;
    }
    
    .logout-btn {
      background: #dc3545;
      color: white;
      border: none;
      padding: 6px 12px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 12px;
      transition: background-color 0.2s;
    }
    
    .logout-btn:hover {
      background: #c82333;
    }
  `]
})
export class UserInfoComponent implements OnInit {

  constructor(public authService: AuthService) {}

  ngOnInit(): void {}

  getUserName(): string {
    return this.authService.getUserName();
  }

  getUserEmail(): string {
    return this.authService.getUserEmail();
  }

  getUserPicture(): string {
    return this.authService.getUserPicture();
  }

  logout(): void {
    this.authService.logout();
  }
}