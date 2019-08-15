import React from 'react'
import styled from 'styled-components'
import eventImage from '../images/event.jpg'
import Icon from './Icon'

const Container = styled.div`
  grid-column: 3 / 4;
  overflow: hidden;
  min-height: 90vh;
`

const Img = styled.img`
  width: 100%;
  margin: 0 1px -5px;
`

const DateWrapper = styled.div`
  display: inline-block;
  margin-bottom: 20px;
  text-align: center;
  padding: 0 30px;
`

const DateMonth = styled.div`
  color: ${props => props.theme.palette.red};
  font-size: 12px;
  line-height: 12px;
  margin-bottom: 4px;
`

const DateDay = styled.div`
  font-weight: 300;
  font-size: 24px;
  line-height: 28px;
  color: #1d2129;
`

const HeaderWrapper = styled.div`
  display: inline-block;
  margin-bottom: 20px;
`

const Header = styled.h1`
  font-size: 20px;
  color: #1d2129;
  margin: 0;
  font-weight: normal;
  line-height: 28px;
`

const SubHeader = styled.p`
  font-size: 14px;
  color: #90949c;
  line-height: 18px;
  margin: 0;
`
const InfoContainer = styled.div`
  background-color: white;
  padding: 20px 0;
  border-radius: 0 3px 3px 0;
  border: 1px solid #dddfe2;
  margin: 0;
`

const Details = styled.div`
  display: grid;
  grid-template-columns: 20px 2fr 1fr;
  grid-template-rows: auto auto;
  padding: 0 12px;

  & > div:nth-child(1) {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    align-self: center;
    justify-self: center;
  }

  & > div:nth-child(2) {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    align-self: center;
    justify-self: center;
  }
`

const Line = styled.div`
  content: "";
  border-top: 1px solid #dadde1;
  display: block;
  margin: 0 12px;
`

const Time = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  color: #4b4f56;
  font-size: 14px;
  padding: 16px 0 14px 14px;
`

const Location = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  padding: 14px 0 16px 14px;

  & > div:nth-child(1) {
    color: #4b4f56;
    font-size: 14px;
    margin-bottom: 5px;
  }

  & > div:nth-child(2) {
    color: #90949c;
    font-size: 12px;
    white-space: nowrap;
  }
`

const MapLink = styled.a.attrs({
  href: 'https://goo.gl/maps/KJbom4L4AaT7kzCN8',
  target: '_blank'
})`
  grid-column: 3 / -1;
  grid-row: 2;
  align-self: center;
  justify-self: end;
  font-size: 12px;
  white-space: nowrap;
  padding-right: 12px;
  text-decoration: none;
  color: #4267b2;

  &:hover {
    text-decoration: underline;
  }
`

const Block = styled.div`
  margin: 12px 0;
  background-color: #fff;
  border: 1px solid #dddfe2;
  border-radius: 3px;
`

const BlockTitle = styled.div`
  padding: 16px 12px;
  border-bottom: 1px solid #dadde1;
  color: #1d2129;
  line-height: 18px;
  font-size: 14px;
  font-weight: 600;
`

const BlockBody = styled.div`
  padding: 16px 12px;
  color: #1d2129;
  line-height: 18px;
  font-size: 14px;
`

const Chip = styled.span`
  padding: 5px;
  color: ${props => props.theme.palette.chipText};
  background-color: ${props => props.theme.palette.chipBg};
  font-size: 12px;
  display: inline-block;
  margin: 12px 5px 12px 0;

  &:first-child {
    margin-left: 12px;
  }

  &:last-child {
    margin-right: 12px;
  }
`

const Event = () => (
  <Container>
    <Img src={eventImage} />
    <InfoContainer>
      <DateWrapper>
        <DateMonth>AUG.</DateMonth>
        <DateDay>25.</DateDay>
      </DateWrapper>
      <HeaderWrapper>
        <Header>Gustavs børnefødselsdag</Header>
        <SubHeader>Privat &#x2027; Organiseret af Gustav Burchardt</SubHeader>
      </HeaderWrapper>
      <Line />
      <Details>
        <Icon glyph="clock" size="16px" />
        <Icon glyph="location" size="16px" />
        <Time>
          25. aug. 2019 kl. 12.00
        </Time>
        <Location>
          <div>Gustavs lejlighed</div>
          <div>Maglemosevej 11, 1. tv. 2900 Hellerup</div>
        </Location>
        <MapLink>Vis kort</MapLink>
      </Details>
    </InfoContainer>
    <Block>
      <BlockTitle>Detaljer</BlockTitle>
      <BlockBody>
        Hej allesammen!
      </BlockBody>
      <div>
        <Chip>Børnevenlig</Chip>
      </div>
    </Block>
  </Container>
)

export default Event
