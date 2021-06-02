import { combineReducers } from "redux";
import { themeReducer } from './theme/theme'

export const rootReducer = combineReducers({
    themeState: themeReducer
})