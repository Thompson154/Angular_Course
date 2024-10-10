import { Component, EventEmitter,Output } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { data } from '../../../data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ItemComponent,CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

    @Output() onShowDetails = new EventEmitter<any>();

    people: any[] = []; 
    filteredPeople: any[] = []; 
  
    constructor() {
      this.loadItems();
    }
  
    loadItems() {
      this.people = Object.values(data).slice(0, 5); 
      this.filteredPeople = [...this.people]; 
    }
  
    handleDelete(index: number) {
      this.people.splice(index, 1); 
      this.filteredPeople.splice(index, 1); 
  
      if (this.people.length < 5) {
        const remainingData = Object.values(data).slice(5);
        if (remainingData.length > 0) {
          this.people.push(remainingData[0]); 
          this.filteredPeople.push(remainingData[0]);
        }
      }
  
      if (this.people.length === 0) {
        this.filteredPeople = [];
      }
    }

    handleShowDetails(person: any) {
      this.onShowDetails.emit(person);
    }
  
    onSearch(searchData: { query: string; type: string }) {
      const { query, type } = searchData;
  
      this.filteredPeople = this.people.filter(person => {
        const fullName = `${person.name} ${person.lastName}`.toLowerCase(); 
        const isStudent = person.type.toLowerCase() === 'student';
        const isProfessor = person.type.toLowerCase() === 'professor';
  
        const matchesQuery = fullName.includes(query.toLowerCase());
        const matchesType = type === 'all' || (type === 'student' && isStudent) || (type === 'professor' && isProfessor);
  
        return matchesQuery && matchesType;
      });
    }

}
