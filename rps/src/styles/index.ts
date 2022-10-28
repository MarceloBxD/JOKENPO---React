import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    *{
        background-color: #1A1A1A;
        margin: 0;
        padding: 0;
        box-sizing: 'border-box';
        text-decoration: none;
        outline: none;
    }
`;

export const Container = styled.div`
    width: 428px;
    margin: 0 auto;
    padding: 20px 50px;
`;

export const Flex = styled.div`
    display: flex;
    width: 100%;
    align-items: ${props => props.align || 'center'};
    justify-content: ${props => props.justify || 'center'};
    flex-direction: ${props => props.flexDir || 'row'};
    gap: ${props => props.gap || '16px'}
`;

export const Space = styled.div`
    width: 100%;
    margin: ${props => props.margin || '20px'};
`;

export const Typography = styled.p`
    font-weight: ${props => props.fontWeight || '700'};
    font-size: ${props => props.fontSize || '18px'};
    line-height: ${props => props.lineHeight || '27px'};
    color: ${props => props.primary ? '#1A1A1A' : '#ECECEC' };
    letter-spacing: ${props => props.letterSpacing || '0px'};
`;