import styled from 'styled-components';

export const Wrapper = styled.section`
    width: 100%;
   
`;

export const Row = styled.div`
    width: 100%;
    
`;
export const Img = styled.div`
    border-color: green;
    border-radius: 10px;
    border-style: solid;
    border-radius: 50px;
    background-image: url('https://i.pinimg.com/236x/f6/5d/94/f65d94584446a1c48cdc5f80ad6b3c30.jpg')
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
export const Text = styled.div`
    color: black;
    font-size: ${props => props.fontSize}px;
`;
export const img = styled.div`
    height: 1px; 
`;
