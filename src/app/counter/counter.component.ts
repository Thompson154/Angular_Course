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
  appBackground: string = 'red'

  // constructor() {
  //   afterRender({
  //   //  earlyRead: () => {
  //     // const currentAppColor = this.appBackground
  //     // console.log("Llegaste al earlyRead " + this.appBackground)
  //     //   return 'From earlyRead: ' + currentAppColor
  //     // },
  //     // mixedReadWrite: (props) => {
  //     //   if(props.includes('red')){
  //     //     this.appBackground = 'green'
  //     //   } else {
  //     //     this.appBackground = 'red'
  //     //   }
  //     //   console.log("Llegaste al mixedReadWrite " + this.appBackground)
  //     //   return 'From mixedReadWrite: ' + this.appBackground
  //     // },
  //     write: () => {
  //       document.body.style.backgroundColor = this.appBackground
  //       const currentColor = this.appBackground
  //       if(currentColor ==='red'){
  //         this.appBackground = 'blue'
  //       } else {
  //         this.appBackground = 'red'
  //       }
  //       console.log("Llegaste al WRITE " + this.appBackground)
  //       return 'FROM write:' + this.appBackground
  //     },
  //     read: (props) => {
  //       const newBackground = this.appBackground
  //       console.log("Llegaste al READ: " + this.appBackground)
  //     }
  //   })

  //   afterNextRender(()=>{
  //     console.log("After NEXT RENDER:", this.sum)
  //   })
  // }
}
