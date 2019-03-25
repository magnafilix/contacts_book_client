import actionTypes from '../constants/actionTypes'

export default (state = {}, action) => {
  const { payload, type } = action

  switch (type) {
    case actionTypes.CONTACTS.SET:
      return payload.value
    default:
      return state
  }
}