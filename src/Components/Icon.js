import styled from 'styled-components'
import main from '../icons/main.png'

const getPosition = (glyph) => {
  switch (glyph) {
    case 'people':
      return '-25px -354px'
    case 'search':
      return '-140px -264px'
    case 'logo':
      return '-125px -304px'
    case 'messages':
      return '-75px -354px'
    case 'notifications':
      return '-200px -329px'
    case 'help':
      return '-125px -354px'
    case 'settings':
      return '-250px -329px'
    default:
      return 'center'
  }
}

const Icon = styled.div`
  background-image: url(${main});
  background-repeat: no-repeat;
  background-size: auto;
  height: ${props => props.size || '24px'};
  width: ${props => props.size || '24px'};
  background-position: ${props => getPosition(props.glyph)};
  overflow: hidden;
  display: inline-block;
  vertical-align: middle;
`

export default Icon
