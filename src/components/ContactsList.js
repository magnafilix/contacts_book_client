import React, { Component } from 'react'
import styled from 'styled-components'

import ContactCard from './ContactCard'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 125px;
`

class ContactsList extends Component {
  render() {
    const { contacts = [] } = this.props

    return (
      <Container>
        {
          contacts && contacts.length
            ? (
              contacts
                .map((contact, index) => <ContactCard
                  key={`${contact._id}&${index}`}
                  {...contact}
                />)
            )
            : (
              <>
                <h1>No Contacts in the Book yet.</h1>
              </>
            )
        }
      </Container>
    )
  }
}

export default ContactsList