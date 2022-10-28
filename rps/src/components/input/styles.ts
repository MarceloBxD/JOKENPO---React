import styled from "styled-components";

export const Input = styled.input`
    width: '120px';
    background-color: #E3E3E3;
    border-radius: ${props => props.borderRadius || '0px'};
    padding: ${props => props.padding || '0px'};
    border: none;
    outline: none;
`