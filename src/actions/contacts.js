import actionTypes from '../constants/actionTypes'

export const createContact = value => dispatch => dispatch({
  type: actionTypes.CONTACTS.CREATE,
  payload: { value }
})

export const updateContact = value => dispatch => dispatch({
  type: actionTypes.CONTACTS.UPDATE,
  payload: { value }
})

export const fetchContacts = () => dispatch => dispatch({
  type: actionTypes.CONTACTS.FETCH
})

export const setOne = value => dispatch => dispatch({
  type: actionTypes.CONTACTS.SET_ONE,
  payload: { value }
})

export const set = value => dispatch => dispatch({
  type: actionTypes.CONTACTS.SET,
  payload: { value }
})