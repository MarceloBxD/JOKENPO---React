import styled from "styled-components";

interface iContainer{
    direction: string;
    w: string;
    h: string;
}

interface iLeftSide{
    direction: string;
}

interface iTypography{
    decoration: string;
}

export const Container = styled.div<iContainer>`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  background-color: #1e1e1e;
  border-radius: 3px;
  color: #fff;
  margin-top: 50px;
  justify-content: center;
  align-items: center;
  width: ${props=> props.w || '450px'};
  height: ${props=> props.h || '450px'};
`;

export const LeftSide = styled.div<iLeftSide>`
  display: flex;
  align-items: center;
  flex-direction: ${(props) => props.direction || "row"};
  width: 50%;
  height: 100%;
  border-right: 1px solid #e3e3e3;
`;

export const RightSide = styled.div<any>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 100%;
`;

export const Typography = styled.div<iTypography>`
    margin-top: 10px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 4px;
    text-decoration: ${props => props.decoration || 'none'};
`
