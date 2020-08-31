import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { increment, decrement, reset } from '../counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  count$: Observable<number>

  constructor(private store: Store<{ count: number }>) { 
    this.count$ = this.store.pipe(select('count'));
  }

  ngOnInit(): void {
  }

  increment() {
    debugger;
   this.store.dispatch(increment());
  }

  decrement() {
   this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

}
