import React, { Component } from 'react'
import { connect } from 'react-redux'

import ContactsBook from '../components/ContactsBook'
import { fetchContacts } from '../actions/contacts'

class ContactsBookContainer extends Component {
  componentDidMount = () => {
    const { fetchAllContacts } = this.props
    fetchAllContacts()
  }

  render() {
    return (
      <ContactsBook />
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  fetchAllContacts: () => dispatch(fetchContacts())
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactsBookContainer)