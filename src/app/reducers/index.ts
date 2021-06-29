import {
  ActionReducerMap,
  MetaReducer
} from "@ngrx/store";

import {environment} from "../../environments/environment";
import {countNode, countReducer, CountState} from "./count/count.reducer";

export interface State {
  [countNode]: CountState
}

// @ts-ignore
export const reducers: ActionReducerMap<State, Action> = {
  [countNode]: countReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
