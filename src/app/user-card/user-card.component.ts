import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
})
export class UserCardComponent implements OnInit, OnDestroy, OnChanges {
  @Input() name: string = '';
  @Input() email: string = '';

  @Output() sendData = new EventEmitter(true);

  password:string = ''


  constructor() {
    console.log('Use card constructor');
  }
  ngOnInit(): void {
    console.log('User card OnInt');
    this.password = this.name + this.email + ' PASSWORD'
  }

  ngOnDestroy(): void {
    console.log("User card OnDestroy");
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('CHANGES: ', changes)

    this.password = changes['name'].currentValue + changes['email'].currentValue + 'PASSWORD'
  }

  public onSendData() {
    this.sendData.emit("Hi, Adri_154, I'm a child XD");
  }


}
