import { defineAction } from 'redux-define'

export default {
  CONTACTS: defineAction('CONTACTS', ['FETCH', 'SET'])
}