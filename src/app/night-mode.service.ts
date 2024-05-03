// night-mode.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NightModeService {
  isNightMode: boolean = false;

  toggleNightMode() {
    this.isNightMode = !this.isNightMode;
    // You can also store the mode in local storage to persist it across sessions
    localStorage.setItem('nightMode', this.isNightMode ? 'true' : 'false');
  }

  // Method to check if night mode is enabled
  isNightModeEnabled() {
    // Check if night mode is enabled in local storage
    const storedMode = localStorage.getItem('nightMode');
    if (storedMode !== null) {
      return storedMode === 'true';
    }
    // Default to false if not set in local storage
    return false;
  }
}
