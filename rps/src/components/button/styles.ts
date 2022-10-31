import styled from "styled-components";

export const Button = styled.button`
    padding: ${props => props.padding || '0px'};
    background-color: #E3E3E3;
    width: 185px;
    border-radius: ${props => props.borderRadius || '0px'};
    font-weight:500;

    :hover{
        cursor: pointer;
        opacity: 0.9;
    }

`