import React, { Component } from 'react'
import { connect } from 'react-redux'

import ContactsList from '../components/ContactsList'
import { fetchContacts } from '../actions/contacts'

import styled, { keyframes } from 'styled-components'
import { slideInDown } from 'react-animations'

const APP_TITLE = 'Contacts Book'

const slideInDownAnimation = keyframes`${slideInDown}`

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const BookTitleWrapper = styled.div`
  width: 100%;
  position: fixed;
  text-align: center;
  margin-bottom: 25px;
  background-color: #7e9fb5;
  animation: 1s ${slideInDownAnimation};
  box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);

  .heading_1 {
    font-size: 56px;
    font-family: 'Inconsolata', monospace;
    margin: 8px 0;
    font-weight: 100;
  }
`

class ContactsBookContainer extends Component {
  componentDidMount = () => {
    const { fetchAllContacts } = this.props
    fetchAllContacts()
  }

  render() {
    return (
      <Container>
        <BookTitleWrapper>
          <h1 className='heading_1'>
            {APP_TITLE}
          </h1>
        </BookTitleWrapper>
        <ContactsList {...this.props} />
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