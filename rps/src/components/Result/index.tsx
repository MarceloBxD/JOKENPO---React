import React from "react";
import * as C from "./styles";
import { Flex, GridItem, Image, Img } from "@chakra-ui/react";
import { DataChoose } from "../../jogadasJSON";
import { useApp } from "../../contexts/context";

export const Result = () => {
  // Escolha dos jogadores
  const { choosePlayer1, choosePlayer2 }: any = useApp();

  return (
    <C.Container>
      <C.ChoosePlayer1>
        <Flex w="100%" justify="center" align="center" h="100%" color="#e3e3e3">
          {choosePlayer1 == 0 ? (
            <Image
              w="100%"
              h="100%"
              src="https://png.pngtree.com/png-clipart/20220113/ourmid/pngtree-cartoon-hand-painted-stone-illustration-png-image_4159978.png"
            />
          ) : null}
          {choosePlayer1 == 1 ? (
            <Image
              w="100%"
              h="100%"
              src="https://st4.depositphotos.com/1742172/24834/v/1600/depositphotos_248340298-stock-illustration-sticker-cute-cartoon-sheet-paper.jpg"
            />
          ) : null}
          {choosePlayer1 == 2 ? (
            <Image
              w="100%"
              h="100%"
              src="https://w7.pngwing.com/pngs/892/208/png-transparent-cartoon-scissors-cartoon-scissors-cartoon-scissors-animation.png"
            />
          ) : null}
        </Flex>
      </C.ChoosePlayer1>
      <C.Typography>X</C.Typography>
      <C.ChoosePlayer2>
        <Flex w="100%" justify="center" align="center" h="100%" color="#e3e3e3">
          {choosePlayer2 == 0 ? (
            <Image
              w="100%"
              h="100%"
              src="https://png.pngtree.com/png-clipart/20220113/ourmid/pngtree-cartoon-hand-painted-stone-illustration-png-image_4159978.png"
            />
          ) : null}
          {choosePlayer2 == 1 ? (
            <Image
              w="100%"
              h="100%"
              src="https://st4.depositphotos.com/1742172/24834/v/1600/depositphotos_248340298-stock-illustration-sticker-cute-cartoon-sheet-paper.jpg"
            />
          ) : null}
          {choosePlayer2 == 2 ? (
            <Image
              w="100%"
              h="100%"
              src="https://w7.pngwing.com/pngs/892/208/png-transparent-cartoon-scissors-cartoon-scissors-cartoon-scissors-animation.png"
            />
          ) : null}
        </Flex>
      </C.ChoosePlayer2>
    </C.Container>
  );
};
