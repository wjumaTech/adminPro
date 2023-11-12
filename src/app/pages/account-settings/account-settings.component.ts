import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account-settings.component.html',
  styleUrl: './account-settings.component.css'
})
export class AccountSettingsComponent implements OnInit {
  
 
  constructor( private settingsSvc: SettingsService ) {}

  ngOnInit() {
    this.settingsSvc.checkCurrentTheme()
  }
  
  
  public changeTheme( theme: string ): void {
    this.settingsSvc.changeTheme(theme);
  }
  

}
