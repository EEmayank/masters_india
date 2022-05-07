import styled, { keyframes, css } from "styled-components";
import { disableTextSelection } from "../../uikit/css";
import { GREY, WHITE } from '../../uikit/colors'
import { BORDER_RADIUS, ZINDEX } from "../../uikit/dimensions";

export const CellContainer = styled.div`
    padding: 10px;
    ${disableTextSelection}

    position: relative;
`;

export const CellDropdownContainer = styled.div`
    ${disableTextSelection}
    z-index: ${ZINDEX.CELL_DROPDOWN};
    padding: 4px 0;

    position: absolute;
    width: calc(100% - 20px);
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    background-color: white;
    border-radius: ${BORDER_RADIUS.c5};
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    overflow: hidden;

    opacity: 0;
    max-height: 0;
    ${props => props.toggelDropdown ? dropdownExpandAnimation : dropdownCollapseAnimation};
`;

export const CellDropdownItem = styled.div`
    ${disableTextSelection}
    padding: 10px 10px;
    background-color: ${props => props.isSelected ? 'lightGrey' : 'transparent'};
    transition: background-color 0.1s ease-in-out, color 0.1s ease-in-out;
    &:hover {
        background-color: ${GREY.c100};
    }
    cursor: pointer;

`;

export const DropdownLabel = styled.div`
    display: flex;
    gap: 20px;
    padding: 0 10px;
    width: 100%;
    justify-content: space-between;
    cursor: pointer;
`;

const dropdownExpandFrames = keyframes`
    0% {
        opacity: 0;
        max-height: 0;
    }

    10% {
        opacity: 1;
    }

    100% {
        opacity: 100%;
        max-height: 500px;
    }
`;

const dropdownCollapseFrames = keyframes`
    0% {
        opacity: 1;
        max-height: 500px;
    }

    80% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        max-height: 0;
    }

`;

const dropdownExpandAnimation = css`
    animation: ${dropdownExpandFrames} 0.3s ease-in-out both;
`;

const dropdownCollapseAnimation = css`
    animation: ${dropdownCollapseFrames} 0.3s ease-in-out both;
`;

export const CellInput = styled.input`
    border:  none;
    border-bottom:  1px solid ${GREY.c200};
    width: auto;
    height: 100%;

    font-size: 15px;

    &:focus {
        outline: none;
    }
`;
export const CellCheckbox = styled.input``;

export const HeaderCellContainer = styled.div`
    display: flex;
    gap: 20px;
    color: ${WHITE}
`;
