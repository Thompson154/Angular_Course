import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-persona',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent {
  @Input() person: any;

  get showDiscount(): boolean {
    return this.person?.age > 18;
  }
}

