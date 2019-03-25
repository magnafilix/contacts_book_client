import React, { Component } from 'react'
import { connect } from 'react-redux'

import ContactsList from '../components/ContactsList'
import ContactsListTitle from '../components/ContactsListTitle'
import { fetchContacts } from '../actions/contacts'

import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`

class ContactsBookContainer extends Component {
  state = {
    isLoading: true
  }

  componentDidMount = () => {
    const { fetchAllContacts } = this.props
    fetchAllContacts()

    setTimeout(() => this.setState({ isLoading: false }), 3750)
  }

  render() {
    const { isLoading } = this.state

    return (
      <Container>
        <ContactsListTitle />
        <ContactsList {...this.props} isLoading={isLoading} />
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts
})

const mapDispatchToProps = dispatch => ({
  fetchAllContacts: () => dispatch(fetchContacts())
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactsBookContainer)