import styled from 'styled-components'
import main from '../icons/main.png'
import secondary from '../icons/secondary.png'
import tertiary from '../icons/tertiary.png'

const icons = {
  main,
  secondary,
  tertiary
}

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
    case 'clock':
      return '-17px -804px'
    case 'location':
      return '0 -174px'
    default:
      return 'center'
  }
}

const getSource = (glyph) => {
  switch (glyph) {
    case 'location':
      return icons.tertiary
    case 'clock':
      return icons.secondary
    default:
      return icons.main
  }
}

const Icon = styled.div`
  background-image: url(${props => getSource(props.glyph)});
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
