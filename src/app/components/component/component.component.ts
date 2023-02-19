import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Counter } from 'src/app/models/counter.model';
import * as CounterActions from "../../action/counter.action";

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.scss']
})
export class ComponentComponent {



  result: string = "";
  
  count$: Observable<Counter>
 
  constructor(private store: Store<{counter: Counter}>) {
    this.count$ = store.select('counter')
  }
 

  // increment() {
  //   this.store.dispatch(CounterActions.increment())
  // }
 
  // decrement() {
  //   this.store.dispatch(CounterActions.decrement())
    
  // }
 
  // reset() {
  //   this.store.dispatch(CounterActions.reset())
   
  // }


  zero(){
    this.result+='0';
  }
  one(){
    this.result+='1';
  }
  two(){
    this.result+='2';
  }
  there(){
    this.result+='3';
  }
  four(){
    this.result+='4';
  }
  five(){
    this.result+='5';
  }
  six(){
    this.result+='6';
  }
  seven(){
    this.result+='7';
  }
  eight(){
    this.result+='8';
  }
  nine(){
    this.result+='9';
  }
  dot(){
    this.result+='.';
  }
 

  


  multiply(){
    
    this.result+='*';
    // this.store.dispatch(
    //   CounterActions.multiply({ })
    // );
  }
  division(){
    this.result+='/';
  }
  plus(){
    this.result+='+';
  }
  minus(){
    this.result+='-';
  }
  undo(){
    
  }
  clean(){
    this.result =' ';
  }
  equal(){
    
  }


}
