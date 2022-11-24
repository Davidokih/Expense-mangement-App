import React from 'react'
import styled from 'styled-components'

const RecentData = () => {
  return (
      <Container>
          <Buttom>
          <Head>
            <Nav>Customer</Nav>
            <Nav>Amount</Nav>
            <Nav>Due Date</Nav>
            <Nav>Status</Nav>
            <Nav>Action </Nav>
          </Head>
          
        </Buttom>
    </Container>
  )
}

export default RecentData

const Container = styled.div`
`
const Nav = styled.div`

    /* padding: 0px 10px; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* border-left: 1px solid blue; */
  font-weight: 700;
  font-size: 20px;
  color: #1b2559;
  /* width: 100px; */
  /* margin-right: 20px; */
`
const Head = styled.div`
    /* width: 500px; */
  display: flex;
  align-items: center;
  justify-content: space-between;

`
const Buttom = styled.div`
  /* padding: 10px 20px; */
  background-color: #f8f9fa;
  // width: 74.34rem;
  width: 500px;
  overflow-x: scroll;
  scroll-behavior: smooth;


`