import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations'
import theme from '../theme'

const fadeInAnimation = keyframes`${fadeIn}`

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 5px 12px;
  cursor: pointer;
  min-width: 400px;
  border-radius: 4px;
  margin-bottom: 28px;
  transition: all .3s ease;
  animation: 2s ${fadeInAnimation};
  background-image: linear-gradient(to right, ${theme.colors.powder}, ${theme.colors.deepgreen});
  box-shadow: 0 3px 3px -2px rgba(0,0,0,.2), 0 3px 4px 0 rgba(0,0,0,.14), 0 1px 8px 0 rgba(0,0,0,.12);

  &:hover {
    box-shadow: 0 6px 6px -3px rgba(0,0,0,.2), 0 10px 14px 1px rgba(0,0,0,.14), 0 4px 18px 3px rgba(0,0,0,.12);
  }

  @media (max-width: 678px) {
    flex-direction: column;
    padding: 12px 0 16px 0;
    min-width: 275px;

    h3 {
      font-size: 20px;
      margin-bottom: 15px;
      margin-top: 0;
    }

    mark {
      font-size: 20px;
    }
  }
`

const ContactName = styled.h3`
  font-size: 22px;
  font-weight: 500;
  font-family: 'Inconsolata', monospace;
  margin-left: 15px;
  margin-right: 10px;
`

const ContactPhone = styled.mark`
  font-size: 22px;
  background-color: ${theme.colors.lemon};
  font-family: 'Inconsolata', monospace;
  margin-left: 10px;
  margin-right: 15px;
`

class ContactCard extends Component {
  render() {
    const { first_name, last_name, phone_number } = this.props

    return (
      <Card>
        <ContactName>
          {`${first_name} ${last_name}`}
        </ContactName>
        <ContactPhone>
          {phone_number}
        </ContactPhone>
      </Card>
    )
  }
}

export default ContactCard