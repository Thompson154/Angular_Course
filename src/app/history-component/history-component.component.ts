import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history-component.component.html',
  styleUrl: './history-component.component.scss'
})
export class HistoryComponentComponent {
  @Input() operations: string[] = [];
}
