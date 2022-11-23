import React from 'react'
import styled from "styled-components"

const Header = () => {
  return (
      <Container>
          <Wrapper>
              <Logo>Logo</Logo>
              <NavHold>
                <Nav>Home</Nav>
                <Nav>Home</Nav>
                <Nav>Home</Nav>
                <Nav>Home</Nav>
                <Nav>Home</Nav>
              </NavHold>
          </Wrapper>
    </Container>
  )
}

export default Header

const Container = styled.div`
    background-color: black;
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    color: white;
    display: flex;
    justify-content: space-between;
    width: 90%;
    max-width: 1500px;
    align-items: center;
`
const Logo = styled.div``
const NavHold = styled.div`
    width: 300px;
    display: flex;
    justify-content: space-between;
`
const Nav = styled.div``