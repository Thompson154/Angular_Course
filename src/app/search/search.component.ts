import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})

export class SearchComponent {

  searchQuery: string = ''; 
  searchType: string = 'all'; 

  @Output() search = new EventEmitter<{ query: string; type: string }>();

  onSearch() {
    this.search.emit({ query: this.searchQuery, type: this.searchType });
  }
}
