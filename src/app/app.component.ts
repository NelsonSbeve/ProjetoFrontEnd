import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NightModeService } from './night-mode.service';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
            CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


  isNightMode: boolean | undefined;
  constructor(private router: Router, private nightModeService: NightModeService) {}
  ngOnInit() {
    // Initialize night mode based on stored preference
    this.isNightMode = this.nightModeService.isNightModeEnabled();
  }
  toggleNightMode() {
    this.isNightMode = !this.isNightMode;
    this.nightModeService.toggleNightMode();
  }
  navigateToProjetos() {
    this.router.navigate(['/projetos']);
  }

  navigateToColaborators() {
    this.router.navigate(['/colaborators']);
  }

  navigateToHolidays() {
    this.router.navigate(['/holidays']);
  }
  GoToGame() {
    this.router.navigate(['/game']);
  }
  GoToGame2() {
    this.router.navigate(['/game2']);
  }

  title = 'Projeto/Frontend';
}
