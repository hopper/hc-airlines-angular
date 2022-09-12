import { Action, createReducer, on } from "@ngrx/store";
import { Theme } from "../../enums/theme.enum";
import * as globalActions from './global.actions';

export interface GlobalState {
    currentLang: string;
    currentTheme: string;
    currentPartnerId: number;
}

const initialState: GlobalState = {
    currentLang: 'en',
    currentTheme: Theme.THEME_LIGHT_HOPPER,
    currentPartnerId: 0
};

const reducer = createReducer(
    initialState,
    on(globalActions.setCurrentLang, (state, { currentLang }) => ({ ...state, currentLang: currentLang })),
    on(globalActions.setCurrentTheme, (state, { currentTheme }) => ({ ...state, currentTheme: currentTheme })),
    on(globalActions.setCurrentPartnerId, (state, { currentPartnerId }) => ({ ...state, currentPartnerId: currentPartnerId }))
);

export function globalReducer(state: GlobalState | undefined, action: Action): GlobalState {
    return reducer(state, action);
}