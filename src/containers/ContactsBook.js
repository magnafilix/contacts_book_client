import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import ContactsList from '../components/contacts/ContactsList'
import ContactsListTitle from '../components/contacts/ContactsListTitle'
import PaginationBar from '../components/common/PaginationBar'
import SnackBarComponent from '../components/common/SnackBar'

import { fetchContacts, updateContact } from '../actions/contacts'
import { set as setCurrentPage } from '../actions/pagination'
import {
  set as setContactToEdit,
  reset as resetContactToDefault,
  setContactFields
} from '../actions/contactInEdit'

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`

class ContactsBookContainer extends Component {
  state = {
    isLoading: true,
    isSnackBarOpen: false
  }

  componentDidMount = () => {
    const { fetchAllContacts } = this.props
    fetchAllContacts()

    setTimeout(() => this.setState({ isLoading: false }), 3750)
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.apiResponse && nextProps.apiResponse !== this.props.apiResponse)
      this.setState({ isSnackBarOpen: true })
  }

  toggleSnackBar = isSnackBarOpen => this.setState({ isSnackBarOpen })

  render() {
    const { isLoading, isSnackBarOpen } = this.state
    const { apiResponse } = this.props

    return (
      <Container>
        <SnackBarComponent
          isSnackBarOpen={isSnackBarOpen}
          toggleSnackBar={this.toggleSnackBar}
          apiMessage={apiResponse}
        />
        <ContactsListTitle />
        <ContactsList {...this.props} isLoading={isLoading} />
        <PaginationBar {...this.props} isLoading={isLoading} />
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts,
  contactsCount: state.contacts.length,
  currentPage: state.pagination.currentPage,
  contactInEdit: state.contactInEdit,
  apiResponse: state.apiResponse
})

const mapDispatchToProps = dispatch => ({
  fetchAllContacts: () => dispatch(fetchContacts()),
  handlePageChange: page => dispatch(setCurrentPage(page)),
  setContactToEditState: contact => () => dispatch(setContactToEdit(contact)),
  resetContactToEditDefault: () => dispatch(resetContactToDefault()),
  setContactField: name => event => dispatch(setContactFields(name, event)),
  updateContactData: contact => () => dispatch(updateContact(contact))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactsBookContainer)