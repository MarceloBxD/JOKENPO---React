import React from "react";
import * as C from "./styles";
import { Player1div } from "../Player1div";
import { Player2div } from "../Player2div";

export const ContainerPlayers = () => {
  return (
    <C.Container w="100vw" h="100%" direction="row">
      <C.LeftSide direction="column">
        <C.Typography decoration="underline">Jogador1</C.Typography>
        <Player1div />
      </C.LeftSide>
      <C.RightSide>
        <C.Typography decoration="underline">Jogador2</C.Typography>
        <Player2div />
      </C.RightSide>
    </C.Container>
  );
};
