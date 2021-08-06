import styled from 'styled-components';

export const Wrapper = styled.section`
    width: 100%;
    margin:30px;
    display: flex;
    flex-direction: row;
    background-color: #e9d8f4;
 `;

export const Row = styled.div`
    width: 100%;  
`;
export const ColumnLeft = styled.div`
    width: 20%;
    border-right: 1px solid black;

    
`;
export const ColumnRight = styled.div`
    width: 75%;
    border-left: 1px solid black;
`;