import { CommonModule } from '@angular/common';
import {
  AfterContentInit,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
})
export class UserCardComponent
  implements
    OnInit,
    OnDestroy,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterViewInit
{
  @Input() name: string = '';
  @Input() email: string = '';

  @Output() sendData = new EventEmitter(true);

  @ViewChild("buttonTest", {static: false}) buttonTest!: ElementRef // el ! es para no inicializar, lo haremos mas adelante
  @ViewChild("buttonShow", {static: true}) buttonShow!: ElementRef //investigar el static: true/false
  password: string = '';
  showButton:boolean = false

  constructor() {
    console.log('Use card constructor');
  }
  ngOnInit(): void {
    console.log('User card OnInt');
    this.password = this.name + this.email + ' PASSWORD';

    this.buttonShow.nativeElement.textContent = 'button Show in OnInit'
    this.buttonTest.nativeElement.textContent = 'button Test in OnInit'
  }

  ngOnDestroy(): void {
    console.log('User card OnDestroy');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('CHANGES: ', changes);

    this.password =
      changes['name'].currentValue + changes['email'].currentValue + 'PASSWORD';
  }

  ngDoCheck(): void {
    console.log('DO CHECK user card');
  }

  ngAfterContentInit(): void {
    // solo para confirmar que el contenido
    console.log('NG AFTER CONTENT INIT');

  }
  
  ngAfterViewInit(): void { // mas para google maps, investigar
    console.log("NG AFTER VIEW INIT")
    console.log("NG AFTER VIEW INIT",this.buttonTest)
    // this.buttonTest.nativeElement.textContent = "aaaaaaaaaa"
    
    if(this.buttonTest){
      this.buttonTest.nativeElement.textContent = "Button Test in ngAfterViewInit"
    }
  }

  public onSendData() {
    this.sendData.emit("Hi, Adri_154, I'm a child XD");
  }
}
