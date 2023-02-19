import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter] Increment');
export const decrement = createAction('[Counter] Decrement');
export const reset = createAction('[Counter] Reset');  



export const sum = createAction('[Counter] sum', props<{num1: number,num2:number}>());
export const minus = createAction('[Counter] minus', props<{num1: number,num2:number}>());
export const multiply = createAction('[Counter] multiply', props<{num1: number,num2:number}>());
export const division = createAction('[Counter] division', props<{num1: number,num2:number}>());
