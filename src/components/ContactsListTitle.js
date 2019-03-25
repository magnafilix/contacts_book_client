import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import { slideInDown } from 'react-animations'

const APP_TITLE = 'Contacts Book'

const slideInDownAnimation = keyframes`${slideInDown}`

const TitleWrapper = styled.div`
  width: 100%;
  position: fixed;
  text-align: center;
  background-color: #93b6ce;
  animation: 1s ${slideInDownAnimation};
  box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);

  .heading_1 {
    font-size: 56px;
    font-family: 'Inconsolata', monospace;
    margin: 8px 0;
    font-weight: 100;
  }

  @media (max-width: 678px) {
    .heading_1 {
      font-size: 42px;
    }
  }
`

class ContactsListTitle extends Component {
  render() {
    return (
      <TitleWrapper>
        <h1 className='heading_1'>
          {APP_TITLE}
        </h1>
      </TitleWrapper>
    )
  }
}

export default ContactsListTitle