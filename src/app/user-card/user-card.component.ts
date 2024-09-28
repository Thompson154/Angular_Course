import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {

  @Input() name:string = ''
  @Input() email:string = ''

  @Output() sendData = new EventEmitter(true)

  public onSendData(){
    this.sendData.emit("Hi, Adri_154, I'm a child XD")
  }
}
