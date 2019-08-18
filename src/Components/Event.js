import React from 'react'
import styled from 'styled-components'
import eventImage from '../images/event.jpg'
import Icon from './Icon'
import Multiline from './Multiline'
import content from '../content'

const Container = styled.div`
  grid-column: 3 / 4;
  overflow: hidden;
  min-height: 90vh;
  font-size: 10px;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-column: 2 / 5;
    font-size: 12px;
  }
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
  font-size: 1.2em;
  line-height: 1em;
  margin-bottom: 4px;
`

const DateDay = styled.div`
  font-weight: 300;
  font-size: 2.4em;
  line-height: 1.16em;
  color: #1d2129;
`

const HeaderWrapper = styled.div`
  display: inline-block;
  margin-bottom: 20px;
`

const Header = styled.h1`
  font-size: 2em;
  color: #1d2129;
  margin: 0;
  font-weight: normal;
  line-height: 1.4em;
`

const SubHeader = styled.p`
  font-size: 1.4em;
  color: #90949c;
  line-height: 1.4em;
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
  font-size: 1.4em;
  padding: 16px 0 14px 14px;
`

const Location = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  padding: 14px 0 16px 14px;

  & > div:nth-child(1) {
    color: #4b4f56;
    font-size: 1.4em;
    margin-bottom: 5px;
  }

  & > div:nth-child(2) {
    color: #90949c;
    font-size: 1.2em;
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
  font-size: 1.2em;
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
  line-height: 1.4em;
  font-size: 1.4em;
  font-weight: 600;
`

const BlockBody = styled.div`
  padding: 16px 12px;
  color: #1d2129;
  line-height: 1.4em;
  font-size: 1.4em;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: 1.8em;
  }
`

const Chip = styled.span`
  padding: 5px;
  color: ${props => props.theme.palette.chipText};
  background-color: ${props => props.theme.palette.chipBg};
  font-size: 1.2em;
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
        <DateMonth>{content.month}</DateMonth>
        <DateDay>{content.day}</DateDay>
      </DateWrapper>
      <HeaderWrapper>
        <Header>{content.eventName}</Header>
        <SubHeader>Privat &#x2027; Organiseret af Gustav Burchardt</SubHeader>
      </HeaderWrapper>
      <Line />
      <Details>
        <Icon glyph="clock" size="16px" />
        <Icon glyph="location" size="16px" />
        <Time>{content.date}</Time>
        <Location>
          <div>{content.locationName}</div>
          <div>{content.locationAddress}</div>
        </Location>
        <MapLink>Vis kort</MapLink>
      </Details>
    </InfoContainer>
    <Block>
      <BlockTitle>Detaljer</BlockTitle>
      <BlockBody>
        <Multiline>{content.description}</Multiline>
      </BlockBody>
      <div>
        {content.tags.map(tag => (
          <Chip key={tag}>{tag}</Chip>
        ))}
      </div>
    </Block>
  </Container>
)

export default Event
