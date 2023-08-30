import { Component, Input } from '@angular/core';
import { Race } from '../race';

@Component({
  selector: 'app-race-detail',
  templateUrl: './race-detail.component.html',
  styleUrls: ['./race-detail.component.css']
})
export class RaceDetailComponent {
  @Input() race?: Race;
}