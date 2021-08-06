import styled from 'styled-components';

export const Wrapper = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const Row = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1em;
 
`;
export const Img = styled.img`
    border-color: blue;
    border-style: solid;
    border-radius: 75%;
    width: 75%;   
`;
export const Button = styled.button`
    width: 70%;
    margin-top: 2em;
    font-size: 18px;
    font-weight: bold;
    height: 2.2em;
    cursor: pointer;
    background: #50c0ce;
    border-radius: 0.5em;
    outline: none;
    background: #0066CC;
    color: white;
`;
export const Text = styled.div`
    color: black;
    font-size: ${props => props.fontSize}px;
`;
