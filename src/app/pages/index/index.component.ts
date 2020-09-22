import { Component, OnInit } from '@angular/core';
import { Boxshot } from '../../models/boxshot';
import { BoxshotService } from '../../services/boxshot.service';

@Component({
  selector: 'app-index-page',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  boxshots: Boxshot[] = [];
  page: number;

  constructor(private boxshotService: BoxshotService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.page = 1;
    setTimeout(() => {
      this.boxshots = this.getData();
    }, 3000);
  }

  scrolled() {
    this.page++;
    setTimeout(() => {
      this.boxshots.push(...this.getData());
    }, 3000);
  }

  private getData() {
    return this.boxshotService.list(this.page);
  }
}
