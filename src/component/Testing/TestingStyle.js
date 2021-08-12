import styled from 'styled-components';
export const Wrapper = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    background: #DDDDDD;
    border: 1px solid;
    padding-bottom: 20px;
`;

export const Row = styled.div`
    width: 99%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1em;
    padding-bottom: 20px;
    
`;
export const Text = styled.div`
    color: black;
    font-size: ${props => props.fontSize}px;
`;
export const Button = styled.button`
    width: 10em;
    margin-top: 2em;
    font-size: 18px;
    font-weight: bold;
    height: 2.2em;
    cursor: pointer;
    background: #50c0ce;
    border-radius: 0.35em;
    outline: none;
    background: #0066CC;
    color: white;
`;