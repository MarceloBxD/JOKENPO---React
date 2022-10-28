import { GlobalStyles } from "./styles";
import * as C from "./styles";
import { Input } from './components/input'
import { Button } from './components/button'

function App() {
  return (
    <C.Container>
      <C.Flex flexDir='column'>
        <C.Typography letterSpacing='8px' fontSize='22px'>Jo Ken Po</C.Typography>
        <Input/>
        <Button/>
      </C.Flex>
      <GlobalStyles />
    </C.Container>
  );
}

export default App;
