import styled, { createGlobalStyle } from 'styled-components'

interface iFlex{
    align: string;
    justify: string;
    flexDir: string;
}

export const GlobalStyles = createGlobalStyle`
    *{
        background-color: #123;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        outline: none;
    }

    body{
        height: 100%;
        width: 100%;
        overflow-x: hidden;
    }
`;

export const Container = styled.div`
    width: 428px;
`

export const Flex = styled.div<iFlex>`
    display: flex;
    width: 100vw;
    align-items: ${props => props.align || 'center'};
    justify-content: ${props => props.justify || 'center'};
    flex-direction: ${props => props.flexDir || 'row'};
    gap: 16px;
`

export const Space = styled.div<any>`
    width: 100%;
    margin: ${props => props.margin || '20px'};
`

export const Typography = styled.p<any>`
    font-weight: ${props => props.fontWeight || '700'};
    font-size: ${props => props.fontSize || '18px'};
    line-height: ${props => props.lineHeight || '27px'};
    color: ${props => props.primary ? '#1A1A1A' : '#ECECEC' };
    letter-spacing: 6px;
`