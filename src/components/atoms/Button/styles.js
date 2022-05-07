import styled from 'styled-components';
import { GREY, WHITE } from '../../uikit/colors';
import { BORDER_RADIUS } from '../../uikit/dimensions';

export const ButtonContainer = styled.button`
    background-color: ${props => props.color.c500};
    color: ${WHITE};
    transition: background-color 0.2s ease-in-out;

    &:hover {
        background-color: ${props => props.color.c300};
    }

    &:active {
        background-color: ${props => props.color.c700};
    }

    border: none;
    padding: 10px 20px;
    border-radius: ${BORDER_RADIUS.c5};

    cursor: pointer;

    font-size: 0.8rem;

    ${
        props => props.disabled &&
        `
        background-color: ${GREY.c100};
        cursor: auto;
        &:hover {
            background-color: ${GREY.c100};
        }

        &:active {
            background-color: ${GREY.c100};
        }
        `
    }
`;