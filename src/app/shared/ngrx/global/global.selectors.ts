import { createFeatureSelector, createSelector } from "@ngrx/store";
import { GlobalState } from "./global.reducer";

export const getGlobalState = createFeatureSelector<GlobalState>('global');
export const getCurrentLang = createSelector(getGlobalState, state => state.currentLang);
export const getCurrentTheme = createSelector(getGlobalState, state => state.currentTheme);
export const getCurrentPartnerId = createSelector(getGlobalState, state => state.currentPartnerId);