import * as C from "./styles";
import Rock from "../../assets/images/rock.png";
import Paper from "../../assets/images/paper.png";
import Scissor from "../../assets/images/scissor.png";
import { useApp } from "../../contexts/context";
import { DataChoose } from "../../jogadasJSON";
import { Image, Flex } from '@chakra-ui/react'

export const Player2div = () => {
  const { player2, setPlayer2, points, setPoints, setChoosePlayer2 }: any =
    useApp();

  const DataJogada = DataChoose.DataJogada;
  const handleChoose = (e: MouseEvent) => {
    setChoosePlayer2(e.target.id)
  }
 

  return (
    <C.Container>
      <C.InsertData>
        <C.Input
          onChange={(e) => setPlayer2(e.target.value)}
          placeholder="Jogador 2"
        />
        <C.TablePoints>
          <C.Typography>Pontos: {points}</C.Typography>
        </C.TablePoints>
      <C.Typography>Qual será sua jogada {player2}?</C.Typography>     
      {DataJogada.map((item, index) => (
          <Flex
            w="70px"
            h="70px"
            justify="center"
            align="center"
            mt="10px"
            key={index}
          >
            <Image onClick={handleChoose} id={item.id} cursor='pointer' objectFit="cover" w="70px" h="70px" src={item.img} />
          </Flex>
        ))}
      </C.InsertData>
    </C.Container>
  );
};
