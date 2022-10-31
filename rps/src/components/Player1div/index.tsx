import * as C from "./styles";
import React, { useState } from "react";
import Rock from "../../assets/images/rock.png";
import Paper from "../../assets/images/paper.png";
import Scissor from "../../assets/images/scissor.png";

export const Player1div = () => {
  const [player1, setPlayer1] = useState("");

  return (
    <C.Container>
      <C.InsertData>
        <C.Input
          onChange={(e) => setPlayer1(e.target.value)}
          placeholder="Jogador 1"
        />
        <C.Button2>enviar</C.Button2>
        <C.Typography>Qual será sua jogada {player1}?</C.Typography>
      </C.InsertData>
      {/* <C.Typography>Qual será sua jogada {player1}?</C.Typography> */}
      <C.Button>
        <img src={Rock} width="100%" />
      </C.Button>
      <C.Button>
        <img width="100%" src={Paper} />
      </C.Button>
      <C.Button>
        <img src={Scissor} width="100%" />
      </C.Button>
    </C.Container>
  );
};
