import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss',
})
export class ItemComponent {
  @Input() person: any;
  @Output() onDelete = new EventEmitter<void>();
  @Output() onShowDetails = new EventEmitter<any>(); 

  deleteItem() {
    this.onDelete.emit();
  }

  showDetails() {
    this.onShowDetails.emit(this.person);
  }
}
