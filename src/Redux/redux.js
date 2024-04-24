import {legacy_createStore as createStore,combineReducers} from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { footerReduser } from "./footerReduser";
import { headerReduser } from "./headerReduser";
import { asideReduser } from "./asideReduser";
const rootReducer = combineReducers({
    footer: footerReduser,
    header: headerReduser,
    aside: asideReduser,
})

const store = createStore(rootReducer)
export { store };