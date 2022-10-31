import * as C from "./styles";
import React, { useState } from "react";
import Rock from "../../assets/images/rock.png";
import Paper from "../../assets/images/paper.png";
import Scissor from "../../assets/images/scissor.png";

export const Player1div = () => {
  const img1 = Rock;
  const img2 = Paper;
  const img3 = Scissor;

  const [player1, setPlayer1] = useState("");

  return (
    <C.Container>
      <C.InsertData>
        <C.Input
          onChange={(e) => setPlayer1(e.target.value)}
          placeholder="Jogador 1"
        />
        <C.Typography>Qual será sua jogada {player1}?</C.Typography>
      </C.InsertData>
      {/* <C.Typography>Qual será sua jogada {player1}?</C.Typography> */}
      <C.Button>
        <img src={img1} width="100%" />
      </C.Button>
      <C.Button>
        <img width="100%" src={img2} />
      </C.Button>
      <C.Button>
        <img src={img3} width="100%" />
      </C.Button>
    </C.Container>
  );
};
