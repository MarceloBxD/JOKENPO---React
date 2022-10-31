import { GlobalStyles } from "./styles";
import * as C from "./styles";
import { ContainerPlayers } from "./components/ContainerPlayers";
import { Result } from "./components/Result";
import { Header } from "./sections/Header";

function App() {
  return (
      <C.Container>
        <Header/>
        <C.Flex align="center" justify="center" flexDir="column">
          <C.Typography fontSize="25px">
            Jo Ken Po
          </C.Typography>
        </C.Flex>
        <ContainerPlayers />
        <C.Flex align="center" flexDir="column" justify="center">
          <Result />
        </C.Flex>
        <GlobalStyles />
      </C.Container>
  );
}

export default App;
