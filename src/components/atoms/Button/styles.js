import styled from 'styled-components';
import { GREY, WHITE } from '../../uikit/colors';
import { BORDER_RADIUS } from '../../uikit/dimensions';

export const ButtonContainer = styled.button`
    background-color: ${props => props.color.c100};
    color: ${WHITE};

    &:hover {
        background-color: ${props => props.color.c50};
    }

    &:active {
        background-color: ${props => props.color.c200};
    }

    border: none;
    padding: 10px 20px;
    border-radius: ${BORDER_RADIUS.c10};

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