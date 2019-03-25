import { takeEvery } from 'redux-saga/effects'
import actionTypes from '../constants/actionTypes'

import contactsFetch from './contactsFetch'

export default function* () {
  yield takeEvery(actionTypes.CONTACTS.FETCH, contactsFetch)
}