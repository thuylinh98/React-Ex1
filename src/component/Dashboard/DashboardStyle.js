import styled from 'styled-components';

export const Wrapper = styled.section`
    width: 100%;
    padding: 20px 20px 20px 20px;
    display: flex;
    flex-direction: row;
    background-color: #e9d8f4;
 `;

export const Row = styled.div`
    width: 100%;  
`;
export const ColumnLeft = styled.div`
    width: 17%;
    border-right: 1px solid black;
    
`;
export const ColumnRight = styled.div`
    width: 82%;
    border-left: 1px solid black;
`;