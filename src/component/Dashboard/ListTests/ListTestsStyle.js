import styled from 'styled-components';
export const Wrapper = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
 `;

export const Row = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding-left: 1em;
    padding-right: 1em;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    align-items: baseline;
    justify-content: space-between;
`;
export const Column = styled.div`    
`;
export const Input = styled.input`
    width: 70%;
    font-size: 16px;
    height: 2em;
    border-radius: 0.2em;
    outline: none;
    background: #DDDDDD;
`;

export const Button = styled.button`
    width: 5em;
    margin-top: 2em;
    font-size: 14px;
    font-weight: bold;
    height: 2em;
    cursor: pointer;
    background: #50c0ce;
    border-radius: 0.35em;
    outline: none;
    background: #0066CC;
    color: white;
`
export const RowTest = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-content: space-around;
    padding-top: 2em;
`;
export const RowNB = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;
export const ButtonNB = styled.button`
    width: 2em;
    height: 2em;
    background: white

`;
export const Text = styled.div`
`;