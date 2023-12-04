import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaderboardComponent } from '../leaderboard/leaderboard.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, LeaderboardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
