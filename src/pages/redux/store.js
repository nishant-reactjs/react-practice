import { applyMiddleware, legacy_createStore as createStore} from 'redux'
import reducers from './reducer'
import { thunk } from 'redux-thunk'

const initalState = {};

export const store = createStore(reducers, initalState, applyMiddleware(thunk))