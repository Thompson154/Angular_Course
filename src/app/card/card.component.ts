import { Component, Input } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { ItemComponent } from '../item/item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [SearchComponent, ItemComponent, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  selectedSection: string = 'personal';

  @Input() selectedPerson: any;

  showSection(section: string) {
    this.selectedSection = section;
  }
}
