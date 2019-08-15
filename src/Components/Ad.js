import React from 'react'
import styled, { css } from 'styled-components'
import ad from '../images/ad.jpeg'
import metoo from '../images/metoo.jpg'

const Container = styled.div`
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: none;
  }

  grid-column: 4 / 5;
  overflow: hidden;
  position: relative;

  &::after {
    font-size: 12px;
    color: #90949c;
    text-align: right;
    content: "Ads by Gustav";
    width: 100%;
    display: block;
    margin-top: 5px;
  }
`

const Img = styled.img`
  width: 100%;
  cursor: ${props => props.onClick && 'pointer'};
  transition: transform 0.5s ease-out;
  transform: translateY(${props => props.isHidden ? '-100%' : '0'});

  ${props => props.absolute && css`
    position: absolute;
    top: 0;
    left: 0;
  `}
`

const Ad = () => {
  const [clicked, setClicked] = React.useState(false)
  const toggle = () => setClicked(!clicked)

  return (
    <Container>
      <Img src={ad} onClick={toggle} />
      <Img src={metoo} isHidden={!clicked} absolute onClick={toggle} />
    </Container>
  )
}

export default Ad
