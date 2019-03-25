import actionTypes from '../constants/actionTypes'

export default (state = {}, action) => {
  const { payload, type } = action

  switch (type) {
    case actionTypes.CONTACT_IN_EDIT.SET:
      return { ...payload.value }
    case actionTypes.CONTACT_IN_EDIT.RESET:
      return state
    default:
      return state
  }
}