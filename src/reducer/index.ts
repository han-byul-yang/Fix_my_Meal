import { combineReducers } from 'redux'

import tableReducer from './tableReducer'
import mealReducer from './mealReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
  tableReducer,
  mealReducer,
  userReducer,
})

export default rootReducer
