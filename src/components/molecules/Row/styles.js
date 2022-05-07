import styled from 'styled-components';
import { BLUE, GREY, WHITE } from '../../uikit/colors';

const indexColSize = '50px';

export const RowContainer = styled.div`
    display: grid;
    grid-template-columns: ${indexColSize} 1fr 1fr 1fr;
    
    background-color: ${WHITE};
    transition: background-color 0.1s ease-in-out;

    cursor: ${props => props.isClickable ? "pointer" : "auto"};

    &:hover {
        background-color: ${GREY.c50};
    }
`;

export const HeaderRowContainer = styled.div`
    display: grid;
    grid-template-columns: ${indexColSize} 1fr 1fr 1fr;
    transition: background-color 0.1s ease-in-out;
    font-size: 15px;
    font-weight: 600;
    background-color: ${BLUE.c800};
    color: white;
    top: 0;
    position: sticky;
    z-index: 5;
    box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
    padding: 10px 0;
`;

export const AddProductRowContainer = styled.div`
    display: grid;
    grid-template-columns:  max-content 1fr 1fr 1fr;
`;
