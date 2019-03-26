import { takeEvery, takeLatest } from 'redux-saga/effects'
import actionTypes from '../constants/actionTypes'

import contactsFetch from './contactsFetch'
import contactUpdate from './contactUpdate'

export default function* () {
  yield takeEvery(actionTypes.CONTACTS.FETCH, contactsFetch)
  yield takeLatest(actionTypes.CONTACTS.UPDATE, contactUpdate)
}