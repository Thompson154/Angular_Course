import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculator-component.component.html',
  styleUrl: './calculator-component.component.scss',
})
export class CalculatorComponentComponent {

  box1Value:number = 0;
  box2Value:number = 0;

  @Output() sum = new EventEmitter()
  @Output() mul = new EventEmitter()
  @Output() reset = new EventEmitter()

  public onSendMulti(){
    this.mul.emit(Number(this.box1Value)* Number(this.box2Value))
  }

  public onSendSum(){
    this.sum.emit(Number(this.box1Value)+ Number(this.box2Value))
  }

  public onSendReset(){
    this.box1Value = 0
    this.box2Value = 0
    this.reset.emit(null)
  }
}
