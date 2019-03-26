import { call, put } from 'redux-saga/effects'
import { set as setContacts } from '../actions/contacts'
import { plainRequest } from '../helpers/request'

export default function* contactsFetch() {
  const request = plainRequest()
  try {
    const response = yield call(request.get, '/contact/all')
    yield put(setContacts(response.data.contacts))
  } catch (error) {
    console.log(error)
  }
}