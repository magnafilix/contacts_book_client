import { combineReducers } from 'redux'
import contacts from './contacts'
import pagination from './pagination'

export default combineReducers({
  contacts,
  pagination
})
