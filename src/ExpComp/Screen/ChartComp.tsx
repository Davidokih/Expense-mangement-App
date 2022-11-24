import React from 'react'
import styled from "styled-components"

const ChartComp = () => {
  return (
      <Container>
          <Card></Card>
              <Carded></Carded>
    </Container>
  )
}

export default ChartComp

const Carded = styled.div`
  width: 400px;
  height: 350px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin: 8px;
  @media (max-width: 1245px) {
    width: 92%;
  }
  @media (max-width: 1000px) {
    width: 100%;
  }
`;
const Card = styled.div`
  width: 500px;
  height: 350px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin: 8px;
  @media (max-width: 1245px) {
    width: 92%;
  }
  @media (max-width: 1000px) {
    width: 100%;
  }
`;
const Container = styled.div`
     width: 100%;
  min-height: 360px;
  display: flex;
  flex-wrap: wrap;

  justify-content: center;
  /* align-items: center; */
`
