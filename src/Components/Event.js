import React from 'react'
import styled from 'styled-components'
import eventImage from '../images/event.jpg'

const Root = styled.div`
  display: grid;
  grid-template-columns: 1fr 500px 1fr;
`

const Container = styled.div`
  grid-column: 2 / 3;
  margin: 10px 0;
  border-radius: 3px;
  overflow: hidden;
  background-color: #fff;
  min-height: 90vh;
`

const Img = styled.img`
  width: 100%;
`

const Event = () => (
  <Root>
    <Container>
      <Img src={eventImage} />
    </Container>
  </Root>
)

export default Event
