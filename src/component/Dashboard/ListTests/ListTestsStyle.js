import styled from 'styled-components';
export const Wrapper = styled.section`
    width: 100%;
 `;

export const Row = styled.div`
width: 100%;
box-sizing: border-box;
padding-left: 1em;
padding-right: 1em;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;

`;
export const ColumnLeft = styled.div`
    float: left; 
    width: 70%;
   

    
`;
export const ColumnRight = styled.div`
    float: right; 
    width: 20%;
   
`;
export const Input = styled.input`
    width: 50%;
    font-size: 16px;
    height: 1.5em;
    border-radius: 0.2em;
    outline: none;
    background: #DDDDDD;
`;

export const Button = styled.button`
    width: 7em;
    margin-top: 2em;
    font-size: 14px;
    font-weight: bold;
    height: 2.2em;
    cursor: pointer;
    background: #50c0ce;
    border-radius: 0.35em;
    outline: none;
    background: #0066CC;
    color: white;
`