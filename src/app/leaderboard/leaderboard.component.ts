import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Score } from '../score';
import { ScoreService } from '../score.service';

@Component({
  selector: 'app-leaderboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.css'
})
export class LeaderboardComponent {
  scoreList: Score[] = [];
  scoreService: ScoreService = inject(ScoreService);
  
  constructor() {
    this.scoreList = this.scoreService.getAllScores();
  }

}