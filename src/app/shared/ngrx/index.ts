import { ActionReducerMap } from "@ngrx/store";
import { globalReducer, GlobalState } from "./global/global.reducer";

export interface AppState {
    global: GlobalState;
}

export const reducers: ActionReducerMap<AppState> = {
    global: globalReducer
};