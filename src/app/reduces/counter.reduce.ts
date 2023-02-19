import { createReducer, on } from '@ngrx/store';
import { Counter } from '../models/counter.model';

import * as CounterActions from "../action/counter.action";

let initialState = {counter: 0};

export const counterReducer = createReducer(
  initialState,
  on(CounterActions.decrement, (state) => ({counter: state.counter - 1})),
  on(CounterActions.increment, (state) => ({counter: state.counter + 1})),
  on(CounterActions.reset, (state) => ({counter: 0})),
);



export const counterCacul = createReducer(
  initialState,
  on(CounterActions.sum,(state, action) => ({
    counter: action.num1 + action.num2
  })),
  on(CounterActions.minus,(state, action) => ({
    counter: action.num1 - action.num2
  })),
  on(CounterActions.multiply,(state, action) => ({
    counter: action.num1 * action.num2
  })),
  on(CounterActions.division,(state, action) => ({
    counter: action.num1 / action.num2
  })),
);