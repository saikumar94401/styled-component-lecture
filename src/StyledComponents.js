import styled from 'styled-components'

export const Heading = styled.h1`
  color: blue;
  font-size: 25px;
`

export const Heading2 = styled.h1`
  color: blue;
  font-size: 25px;
`

export const CustomButton = styled.button`
  padding: 10px;
  margin-right: 20px;
  color:${props => (props.outline ? 'ffffff' : '#0070c1')}
  font-size: 15px;
  border-radius: 4px;
  border: 2px solid #0070c1;
  background-color:${props => (props.outline ? '#0070c1' : '#ffffff')}
`
