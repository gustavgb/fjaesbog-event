import React from 'react'
import styled, { css } from 'styled-components'
import Icon from './Icon'
import profilePic from '../images/profile.jpg'

const Root = styled.div`
  grid-column: 1 / -1;
  height: 42px;
  border-bottom: 1px solid ${props => props.theme.palette.border};
  background-color: ${props => props.theme.palette.primary};
  display: grid;
  grid-template-columns: 1fr 1012px 1fr;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 0 100% 0;
  }
`

const Container = styled.div`
  padding: 8px;
  grid-column: 2 / 3;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-column: 1 / -1;
  }
`

const SearchBarWrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 24px;
  flex: 1 0 auto;
  padding-right: 30px;
  padding-left: 8px;
`

const SearchBar = styled.input.attrs({
  type: 'text',
  placeholder: 'Søg'
})`
  padding: 3px 6px;
  display: inline;
  border: 0;
  flex: 1 0 auto;
`

const SearchButton = styled.button`
  color: ${props => props.theme.palette.buttonText};
  background-color: ${props => props.theme.palette.buttonBg};
  padding: 3px 16px;
  opacity: 1;
  transition: opacity .2s linear;
  display: inline;
  border: none;

  &:hover {
    opacity: 0.95;
  }
`

const MenuItem = styled.div`
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: none;
  }

  cursor: pointer;
  border-radius: 2px;
  outline: none;
  text-decoration: none;
  padding: 0 16px 1px;
  font-size: 12px;
  white-space: nowrap;
  font-weight: bold;
  color: ${props => props.theme.palette.white};
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  height: 24px;
  border-right: ${props => props.divider ? '1px solid rgba(0, 0, 0, 0.1)' : '0'};

  &:hover {
    background-color: rgba(0, 0, 0, .1);
  }

  & > img {
    height: 24px;
    border-radius: 100%;
    margin-right: 4px;
  }
`

const IconButton = styled.div`
  color: ${props => props.theme.palette.icons};
  height: 24px;
  border-right: ${props => props.divider ? '1px solid rgba(0, 0, 0, 0.1)' : '0'};
  padding: ${props => props.noPadding ? '0 0 0 6px' : '0 6px 0'};
  cursor: pointer;
  opacity: 0.65;

  &:hover {
    opacity: 1;
  }

  ${props => props.hideOnMobile && css`
    @media (max-width: ${props => props.theme.breakpoints.md}) {
      display: none;
    }
  `}
`

const Top = () => (
  <Root>
    <Container>
      <Icon glyph="logo" size="24px" />
      <SearchBarWrapper>
        <SearchBar />
        <SearchButton>
          <Icon glyph="search" size="16px" />
        </SearchButton>
      </SearchBarWrapper>
      <MenuItem divider>
        <img src={profilePic} alt="profile" />
        Mark
      </MenuItem>
      <MenuItem divider>Shit feed</MenuItem>
      <MenuItem divider>Køb venner</MenuItem>
      <MenuItem divider>Opret</MenuItem>
      <IconButton><Icon glyph="people" /></IconButton>
      <IconButton><Icon glyph="messages" /></IconButton>
      <IconButton divider><Icon glyph="notifications" /></IconButton>
      <IconButton noPadding hideOnMobile><Icon glyph="help" /></IconButton>
      <IconButton hideOnMobile><Icon glyph="settings" /></IconButton>
    </Container>
  </Root>
)

export default Top
