import { createAction, props } from '@ngrx/store';

export const setCurrentLang = createAction('[TODO] Set the current language', props<{ currentLang: string }>());
export const setCurrentTheme = createAction('[TODO] Set the current theme', props<{ currentTheme: string }>());
export const setCurrentPartnerId = createAction('[TODO] Set the current partner id', props<{ currentPartnerId: number }>());