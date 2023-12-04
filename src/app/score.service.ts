import { Injectable } from '@angular/core';
import { Score } from './score';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  url = 'http://localhost:3000/scores';

  async getAllScores(): Promise<Score[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  constructor() { }
}