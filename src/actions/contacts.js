import actionTypes from '../constants/actionTypes'

export const fetchContacts = () => dispatch => dispatch({
  type: actionTypes.CONTACTS.FETCH
})

export const set = value => dispatch => dispatch({
  type: actionTypes.CONTACTS.SET,
  payload: { value }
})