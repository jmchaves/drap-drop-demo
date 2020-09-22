import { Component, Input } from '@angular/core';
import { Boxshot } from '../../models/boxshot';

@Component({
  selector: 'app-boxshots-list',
  templateUrl: './boxshots-list.component.html',
  styleUrls: ['./boxshots-list.component.scss']
})
export class BoxshotsListComponent {

  @Input() boxshots: Boxshot[];
}
