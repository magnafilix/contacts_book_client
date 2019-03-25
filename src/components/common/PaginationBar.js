import React, { Component } from 'react'
import Pagination from 'react-js-pagination'
import styled from 'styled-components'

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  
  ul {
    display: flex;
    list-style-type: none;
    width: 100%;
    padding: 0;
  }
`

class PaginationBar extends Component {
  render() {
    const {
      contacts,
      isLoading,
      currentPage = 0,
      handlePageChange,
      contactsCount = 0
    } = this.props

    return (
      <PaginationWrapper>
        {
          !isLoading && contacts.length &&
          (
            <Pagination
              pageRangeDisplayed={3}
              itemsCountPerPage={10}
              activePage={currentPage}
              onChange={handlePageChange}
              totalItemsCount={contactsCount}
            />
          )
        }
      </PaginationWrapper>
    )
  }
}

export default PaginationBar