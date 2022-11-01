import * as C from "./styles";
import { DataChoose } from "../../jogadasJSON";
import { useApp } from "../../contexts/context";
import { Flex, Image } from "@chakra-ui/react";

export const Player1div = () => {
  const DataJogada = DataChoose.DataJogada;

  const { player1, setPlayer1, points, setPoints, choose, setChoose }: any =
    useApp();

  return (
    <C.Container>
      <C.InsertData>
        <C.Input
          onChange={(e) => setPlayer1(e.target.value)}
          placeholder="Jogador 1"
        />
        <C.TablePoints>
          <C.Typography>Pontos: {points}</C.Typography>
        </C.TablePoints>
        <C.Typography>Qual será sua jogada {player1}?</C.Typography>
        {DataJogada.map((item, index) => (
          <Flex
            w="70px"
            h="70px"
            justify="center"
            align="center"
            mt="10px"
            key={index}
          >
            <Image cursor='pointer' objectFit="cover" w="70px" h="70px" src={item.img} />
          </Flex>
        ))}
      </C.InsertData>
    </C.Container>
  );
};
