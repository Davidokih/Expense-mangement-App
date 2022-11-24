import React from 'react'
import styled from 'styled-components'
import ExpenseData from './ExpenseData'
import { BiSearch } from "react-icons/bi"
import { RiAddFill } from "react-icons/ri"
import { IoIosFunnel } from "react-icons/io"
import {FaLongArrowAltDown,FaLongArrowAltUp} from "react-icons/fa"

const ExpComp = () => {
  return (
    <>
    <Container>
      <Header>
        <Hold>
          <Title>Expense</Title>
          <Content>Dashboard / <span>Express</span></Content>
        </Hold>
        <ButtonHold>
          <Button><Icon2 /></Button>
          <Button><Icon3 /></Button>
        </ButtonHold>
      </Header>
      <Wrapper>
        <Top>
          <Show>
            Show
            <Select>
              <Option>10</Option>
              <Option>20</Option>
              <Option>30</Option>
              <Option>40</Option>
            </Select>
            entries
          </Show>
          <Search>
            <Icon></Icon>
            <Input placeholder="Search"/>
          </Search>
        </Top>
        <Buttom>
          <Head>
            <Nav>Category <span><Icon1 color='#622559'/><Icon4 color='lightgray'/></span></Nav>
            <Nav>Customer <span><Icon1 color='lightgray'/><Icon4 color='lightgray'/></span></Nav>
            <Nav>Expense Dates <span><Icon1 color='lightgray'/><Icon4 color='lightgray'/></span></Nav>
            <Nav>Notes <span><Icon1 color='lightgray'/><Icon4 color='lightgray'/></span></Nav>
            <Nav>Amount <span><Icon1 color='lightgray'/><Icon4 color='lightgray'/></span></Nav>
            <Nav>Status <span><Icon1 color='lightgray'/><Icon4 color='lightgray'/></span></Nav>
            <Nav>Action <span><Icon1 color='lightgray'/><Icon4 color='lightgray'/></span></Nav>
          </Head>
          
        </Buttom>
        <Tail>
            <ExpenseData />
        </Tail>
        <Top>
          <Show>
            Showing 1 to 7 of 7 entries
          </Show>
          <Next>
            <span>Previous</span>
            <div>1</div>
            <span>Next</span>
          </Next>
        </Top>
      </Wrapper>
    </Container>
      
    </>
  )
}

export default ExpComp

const Icon4 = styled(FaLongArrowAltDown)`
  padding: 0px;
  margin: 0px;
`
const Icon1 = styled(FaLongArrowAltUp)`
  padding: 0px;
  margin: 0px;
`
const Next = styled.div`
  width: 200px;
  padding: 0px 3px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid lightgray;
  border-radius: 5px;

  span{
    color: #908f8f;
    cursor: pointer;
  }
  div{
    color: white;
    font-weight: 500;
    background-color: #7638ff;
    height: 32px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
const Option = styled.option``
const Select = styled.select`
  height: 30px;
  width: 50px;
  margin: 5px;
  border: 1px solid lightgray;
`
const Icon3 = styled(IoIosFunnel)`
  font-size: 20px;
  font-weight: 700;
`
const Icon2 = styled(RiAddFill)`
  font-size: 20px;
  font-weight: 700;
`
const Tail = styled.div`
  

  /* :hover{
    background-color: #9c9b9b;
  } */
` 
const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* border-left: 1px solid blue; */
  font-weight: 700;
  font-size: 20px;
  color: #1b2559;

  span{
    display: flex;
    padding: 0px;
    margin: 0px;
    justify-content: center;
    align-items: center;
  }
`
const Head = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: space-between; */

  display: grid;
  grid-template-columns: 100px 190px 150px 175px 90px 120px 160px;
  grid-gap: 4px;

  @media (max-width: 1350px){
    grid-template-columns: 120px 230px 170px 200px 130px 150px 160px;

  }
`
const Buttom = styled.div`
  padding: 10px 20px;
  background-color: #f8f9fa;
  /* width: 57rem; */
width: calc(100%-70px);
@media (max-width: 1200px){
    /* overflow-x: scroll; */
  /* width: 57rem; */
  width: 74rem;


  }

  /* width: 100%; */

`
const Input = styled.input`
  border: 0px;
  outline: none;
`
const Icon = styled(BiSearch)`
  cursor: pointer;
`
const Search = styled.div`
  width: 200px;
  padding: 0px 3px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid lightgray;
  border-radius: 5px;

  span{
    color: #908f8f;
  }
  div{
    color: white;
    font-weight: 500;
    background-color: purple;
    height: 100%;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
const Show = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;
  color: #a6a6a6;
`
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
  /* width: 95%; */
  /* border-bottom: 1px solid gray; */
  /* box-shadow: ;v */
`
const Button = styled.button`
  border: 0px;
  outline: none;
  /* padding: 10px 15px; */
  width: 40px;
  height: 40px;
  margin: 2px;
  background-color: #7638ff;
  color: white;
  border-radius: 5px;
  font-weight: 500;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
`
const ButtonHold = styled.div``
const Content = styled.div`
  color: #18191a;
  font-weight: 500;

  span{
    color: #6c6666;
  }
`
const Title = styled.div`
  font-size: 25px;
  font-weight: 600;
  color: #18191a;
`
const Hold = styled.div`
  margin: 30px 0px;
`
const Header = styled.div`
  width: 90%;
  max-width: 1500px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Wrapper = styled.div`
  width: 90%;
  max-width: 1500px;

  background-color: white;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

  @media (max-width: 1350px){
    overflow-x: scroll;
  }

`
const Container = styled.div`
  width: calc(100vw - 200px);

background-color: #f7f8f9;
  /* width: 100%; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  position: absolute;
	right: 0px;
	top: 70px;

  @media screen and (max-width: 1005px) {
		width: 100%;
	}
`