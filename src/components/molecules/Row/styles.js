import styled from 'styled-components';
import { ROW_TYPE_ADD_NEW, ROW_TYPE_HEADING } from '../../../utility/constants';
import { GREY, WHITE } from '../../uikit/colors';

export const RowContainer = styled.div`
    display: grid;
    grid-template-columns: 42px 1fr 1fr 1fr;
    
    background-color: ${WHITE};
    transition: background-color 0.1s ease-in-out;

    cursor: ${props => props.isClickable ? "pointer" : "auto"};

    ${({type}) => {
        if (type === ROW_TYPE_HEADING) {
            return `
                font-size: 15px;
                font-weight: 600;
                background-color: grey;
                color: white;
            `;
        }

        if (type === ROW_TYPE_ADD_NEW) {
            return ``;
        }

        return `
            &:hover {
            background-color: ${GREY.c50};
        `;
    }}

    position: ${props => props.isSticky ? "sticky" : "auto"};
`;
