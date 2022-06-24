import { ActionReducerMap } from "@ngrx/store";
import { globalReducer, GlobalState } from "./global/global.reducer";
import { routerReducer } from '@ngrx/router-store';
import { RouterState } from "@angular/router";

export interface AppState {
    global: GlobalState;
    router: RouterState;
}

export const reducers: ActionReducerMap<AppState> = {
    global: globalReducer,
    router: routerReducer
};