import { combineReducers } from 'redux'
import contacts from './contacts'
import pagination from './pagination'
import contactInEdit from './contactInEdit'

export default combineReducers({
  contacts,
  pagination,
  contactInEdit
})
