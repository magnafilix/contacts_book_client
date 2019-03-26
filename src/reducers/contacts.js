import actionTypes from '../constants/actionTypes'

export default (state = {}, action) => {
  const { payload, type } = action

  switch (type) {
    case actionTypes.CONTACTS.SET:
      return payload.value
    case actionTypes.CONTACTS.SET_ONE:
      const foundIndex = state.findIndex(x => x._id === payload.value._id)
      state[foundIndex] = payload.value
      return state
    default:
      return state
  }
}