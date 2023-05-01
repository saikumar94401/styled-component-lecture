import './App.css'
import {Heading, CustomButton} from './StyledComponents'

const App = () => (
  <>
    <Heading>Hello World</Heading>
    <CustomButton type="button">Click</CustomButton>
    <CustomButton type="button" outline>
      Click
    </CustomButton>
  </>
)

export default App
