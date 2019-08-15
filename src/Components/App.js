import React from 'react'
import styled from 'styled-components'
import Top from './Top'
import Event from './Event'
import Ad from './Ad'

const Root = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: 1fr 256px 500px 256px 1fr;
  padding-bottom: 10px;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 0 0 100% 0 0;
  }
`

export default () => {
  return (
    <Root>
      <Top />
      <Event />
      <Ad />
    </Root>
  )
}
