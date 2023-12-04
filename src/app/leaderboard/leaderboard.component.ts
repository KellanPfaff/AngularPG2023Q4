import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Score } from '../score';

@Component({
  selector: 'app-leaderboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.css'
})
export class LeaderboardComponent {
  scoreNew!: Score;
  scores: Score[] = [
    {
      id: 'dff6956f-7cad-4fd0-abc8-11b636c9baf2',
      rank: 1,
      score: 46,
      gamertag: 'Posco Bracegirdle',
    },
    {
      id: '52da99a2-f46a-477f-8379-bf9c6d8c50ae',
      rank: 2,
      score: 45,
      gamertag: 'Bildad Pott',
    },
    {
      id: '76c41cb1-ad47-4e51-b7c6-fc4938ba6c68',
      rank: 3,
      score: 44,
      gamertag: 'Richomeres Burrows',
    },
    {
      id: '9f263feb-2e3e-4191-98b2-a8417cf8563b',
      rank: 4,
      score: 43,
      gamertag: 'Hending Sandheaver',
    },
    {
      id: '0cef0d39-0d0d-4e09-9f95-e5b2b596c9a0',
      rank: 5,
      score: 32,
      gamertag: 'Engilbert Hayward',
    },
    {
      id: '8e73d25f-1be9-4d72-acaf-b98dcd7e753d',
      rank: 6,
      score: 24,
      gamertag: 'Gozolon Banks',
    },
    {
      id: '76efb995-9caf-43b3-8642-809b2ed68811',
      rank: 7,
      score: 23,
      gamertag: 'Ratold Gawkroger',
    },
    {
      id: '15d911e8-979b-4512-ab64-391322298dfe',
      rank: 8,
      score: 18,
      gamertag: 'Crassus Greenhand',
    },
    {
      id: '47706e7d-54a9-41a6-837b-348fe3f12537',
      rank: 9,
      score: 15,
      gamertag: 'Roderic Banks',
    },
    {
      id: 'e3325373-0b0c-4323-bdf1-42bbd26c49ac',
      rank: 10,
      score: 10,
      gamertag: 'Dudo Burrows',
    },
  ];
}