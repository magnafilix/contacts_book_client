import { defineAction } from 'redux-define'

export default {
  CONTACTS: defineAction('CONTACTS', ['FETCH', 'SET']),
  PAGINATION: defineAction('PAGINATION', ['SET']),
  CONTACT_IN_EDIT: defineAction('CONTACT_IN_EDIT', ['SET', 'RESET'])
}