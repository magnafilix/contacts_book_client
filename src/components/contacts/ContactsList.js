import React, { Component } from 'react'
import styled from 'styled-components'

import ContactCard from './ContactCard'
import LoaderSpinner from '../common/Spinner'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 125px;
  margin-bottom: 55px;

  @media (max-width: 678px) {
    margin-top: 90px;
  }
`

const SpinnerWrapper = styled.div`
  position: absolute;
  top: 40%;
`

class ContactsList extends Component {
  render() {
    const {
      contacts = [],
      isLoading,
      currentPage,
      setContactToEditState,
      contactInEdit,
      setContactField,
      resetContactToEditDefault,
      updateContactData
    } = this.props

    return (
      <Container>
        {
          isLoading ?
            (
              <SpinnerWrapper>
                <LoaderSpinner />
              </SpinnerWrapper>
            )
            : (
              contacts && contacts.length
                ? (
                  contacts
                    .slice(currentPage * 10 - 10, currentPage * 10)
                    .map((contact, index) => <ContactCard
                      key={`${contact._id}&${index}`}
                      {...contact}
                      resetContactToEditDefault={resetContactToEditDefault}
                      setContactToEditState={setContactToEditState}
                      updateContactData={updateContactData}
                      setContactField={setContactField}
                      contactInEdit={contactInEdit}
                    />)
                )
                : (
                  <>
                    <h1>No Contacts in the Book yet.</h1>
                  </>
                )
            )
        }
      </Container>
    )
  }
}

export default ContactsList