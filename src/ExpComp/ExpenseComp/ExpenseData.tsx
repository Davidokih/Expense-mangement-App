import React from 'react'
import styled from "styled-components"
import { FaRegEdit } from "react-icons/fa"
import { BsTrash } from "react-icons/bs"
import {NavLink} from "react-router-dom"


const ExpenseData = () => {
  return (
    <>
    <Container>
      <Head>
      <Nav>Advertising</Nav>
            <Profile><Image /><span>Barbara Moore</span></Profile>
            <Nav>15 Nov 2020</Nav>
            <Nav>	Lorem ipsum dollar...</Nav>
            <Nav>$145</Nav>
            <Button>Approved</Button>
        <Hold>
          <NavLink to="/editExpense"><Butt><span><FaRegEdit /></span>Edit</Butt></NavLink>
          <Butt><span><BsTrash/></span><span/>Delete</Butt>
            </Hold>
          </Head>
      </Container>
      <Container>
      <Head>
      <Nav>Advertising</Nav>
            <Profile><Image /><span>Barbara Moore</span></Profile>
            <Nav>15 Nov 2020</Nav>
            <Nav>	Lorem ipsum dollar...</Nav>
            <Nav>$145</Nav>
            <Button>Approved</Button>
        <Hold>
          <Butt><span><FaRegEdit /></span>Edit</Butt>
          <Butt><span><BsTrash/></span><span/>Delete</Butt>
            </Hold>
          </Head>
    </Container>
    </>
  )
}

export default ExpenseData

const Butt = styled.button`
  /* padding: 5px 20px; */
  /* background-color: #c1efc1; */
  /* width: 100px;
  height: ; */
  padding: 10px;
  border-radius: 5px;
  font-weight: 600;
  border: 1px solid lightgray;
  margin: 5px;
  color: red;
  cursor: pointer;
`
const Button = styled.button`
  /* padding: 5px 20px; */
  background-color: #c1efc1;
  cursor: pointer;

  /* width: 100px;
  height: ; */
  padding: 10px;
  border-radius: 5px;
  font-weight: 600;
  color: #0bb10b;
  border: 0px;

`
const Image = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: gray;
  margin-right: 20px;
`
const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  span{

    :hover{
      cursor: pointer;
      text-decoration: underline;
      color: blue;
    }
  }
`
const Hold = styled.div``
const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 1px solid blue; */
  /* border-left: 1px solid blue; */
`
const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-color: gold; */
  /* display: grid;
  grid-template-columns: 120px 230px 170px 200px 130px 170px 150px;

  grid-gap: 6px; */
`
const Container = styled.div`
/* width: 100%; */
width: 74rem;
padding: 10px 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

  margin: 10px 0px;
  font-weight: 600;
  :hover{
    background-color: #9c9b9b;
  }
`