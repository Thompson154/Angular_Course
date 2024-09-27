import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserCardComponent } from './user-card/user-card.component';



interface IPerson {
  name:string
  lastname: string
  age?:number
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: number = 10;

  animals:string[] = ['a','b','c','d','e','f','g']

  // const a;
  // let a;

  person: IPerson = {
    name: 'Juan',
    lastname: 'Perez',
    age: 25
  }

  students:number[] = [1,2,3,4,5,6]
  parents:number[] = [7,8,9,10]
  var1 = 0
  var2 = null
  var3 = 'hola' 
  
  constructor(){
    const { name, age } = this.person
    console.log('desestruturacion', name, age)
    
    //spreedOperator
    let both = [...this.students, ...this.parents]
    console.log('spreed operator: ',both)

    console.log('REST operator:', this.sum2(2,4,6))
    console.log('Nullish Coalescing:', this.var2 ?? this.var3) 
    console.log('OR', this.var2 || this.var1)


    console.log('substract', this.substract(18,4))

    console.log('MAP:', this.animals.map( (animal) => (animal + 'new')))
    console.log('FOREACH:', this.animals.forEach( (animal) => (animal + 'new')))
    console.log('FIND:', this.animals.find( (animal) => (animal === 'b')))
    console.log('FILTER:', this.animals.filter( (animal) => (animal === 'b')))
    console.log('INDEXOF:', this.animals.indexOf('z'))

    //Operadores para menejar arrays en JavaScript



  }

  public sum2(...persons:number[]){
    //return persons[0] + persons[1]
    return persons.reduce((acumulador,valorActual)=> (acumulador+ valorActual),10)
  }

  public sum(num1:number,num2:number): number {
    return num1 + num2
  }

  public substract(num1:number,num2:number): number {
    return num1 - num2
  }

  public getArray():void{
    const persons:number[] = [1,2,3,4,5,6]
    for(let i = 0; i<persons.length; i++){
      console.log('person =', persons[i])
    }
  }

  public onlyPair():void{
    const persons:number[] = [1,2,3,4,5,6,7,8]
    for(let i = 0; i<persons.length; i++){
      if(persons[i]%2 == 0){
        console.log('person pair =', persons[i])
      }
    }
  }

  public receiveData(data:any){
    console.log('Print in father component: ', data)
  }
}
