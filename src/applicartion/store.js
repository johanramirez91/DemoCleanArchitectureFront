import { compose, applyMiddleware, createStore, combineReducers } from 'redux'
import ui from './reducers/ui'
import todos from './reducers/todos'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({ ui, todos })
// dev tool
const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose

export const configureStore = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
)
