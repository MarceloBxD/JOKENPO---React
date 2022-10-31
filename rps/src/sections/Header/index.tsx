import React from "react";
import * as C from "./styles";
import { Stack, Avatar } from "@chakra-ui/react";
import imgMarcelo from '../../assets/images/Marcelo.png'

export const Header = () => {
  return (
    <C.Header>
      <C.Nome>Marcelo Bracet</C.Nome>
      <C.Avatar>
        <Stack direction="row">
        <Avatar size='lg' name='Marcelo Bracet' src={imgMarcelo} />
        </Stack>
      </C.Avatar>
    </C.Header>
  );
};
