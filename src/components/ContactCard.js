import React, { Component } from 'react'
import styled from 'styled-components'

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  height: 85px;
  min-width: 400px;
  border-left: 10px solid #a45437;
  border-right: 10px solid #a45437;
  border-radius: 4px;
  margin-bottom: 28px;
  background-color: #1d5358;
  transition: all .3s ease;
  box-shadow: 0 3px 3px -2px rgba(0,0,0,.2), 0 3px 4px 0 rgba(0,0,0,.14), 0 1px 8px 0 rgba(0,0,0,.12);

  &:hover {
    box-shadow: 0 6px 6px -3px rgba(0,0,0,.2), 0 10px 14px 1px rgba(0,0,0,.14), 0 4px 18px 3px rgba(0,0,0,.12);
  }
`

const ContactName = styled.h3`
  font-size: 22px;
  font-weight: 500;
  font-family: 'Inconsolata', monospace;
`

const ContactPhone = styled.mark`
  font-size: 22px;
  background-color: #fbe68b;
  font-family: 'Inconsolata', monospace;
`

class ContactCard extends Component {
  render() {
    const { first_name, last_name, phone_number } = this.props

    return (
      <Card>
        <ContactName>
          {`${first_name} ${last_name}:`}
        </ContactName>
        <ContactPhone>
          {phone_number}
        </ContactPhone>
      </Card>
    )
  }
}

export default ContactCard