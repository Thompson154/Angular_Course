import { Component, afterNextRender, afterRender } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  sum: number = 0;

  constructor() {
    afterRender(()=>{
      console.log("After RENDER:", this.sum)
    })

    afterNextRender(()=>{
      console.log("After NEXT RENDER:", this.sum)
    })
  }
}
