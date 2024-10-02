import { CommonModule } from '@angular/common';
import { AfterContentInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
})
export class UserCardComponent implements OnInit, OnDestroy, OnChanges, DoCheck, AfterContentInit{
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

  ngDoCheck(): void {
    console.log("DO CHECK user card")
  }

  ngAfterContentInit(): void { // solo para confirmar que el contenido
    console.log("NG AFTER CONTENT INIT")
  }

  public onSendData() {
    this.sendData.emit("Hi, Adri_154, I'm a child XD");
  }



}
