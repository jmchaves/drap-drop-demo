import { Injectable } from '@angular/core';
import { Boxshot } from '../models/boxshot';
import data from '../../assets/boxshots.json';

@Injectable({
  providedIn: 'root'
})
export class BoxshotService {

  private baseUrl = 'http://cdn-0.nflximg.com/us/boxshots';
  private maxToShow = 30;

  constructor() { }

  list(page = 1): Boxshot[] {
    const list: Boxshot[] = [];
    const to = (page * this.maxToShow) * 2;
    const from = to - this.maxToShow * 2;
    // splice fn will take how many images the UI needs to display.
    const boxshots = this.dataFormatted().splice(from, to);
    boxshots.forEach((box, index) => {
      // Pushes an item every two index since the next one is the same id.
      if (index % 2 === 0) {
        list.push(new Boxshot(
          box.assetId,
          box.movieId,
          box.filename,
          box.width,
          box.height,
          box.contentLength,
          box.md5,
          boxshots[index + 1].deploymentTs,
          `${this.baseUrl}/${boxshots[index + 1].dir}/${box.filename}`
        ));
      }
    });

    return list;
  }

  private dataFormatted(): any[] {
    return (data as any);
  }
}
