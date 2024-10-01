import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
})
export class UserCardComponent implements OnInit, OnDestroy {
  @Input() name: string = '';
  @Input() email: string = '';

  @Output() sendData = new EventEmitter(true);

  constructor() {
    console.log('Use card constructor');
  }
  ngOnInit(): void {
    console.log('User card OnInt');
  }

  ngOnDestroy(): void {
    console.log("User card OnDestroy");
    
  }

  public onSendData() {
    this.sendData.emit("Hi, Adri_154, I'm a child XD");
  }
}
