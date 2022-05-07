import styled from "styled-components";

export const CellContainer = styled.div`
    text-align: center;
    padding: 10px;
`;

export const CellDropdownContainer = styled.div`
    border: 1px solid orange;
`;

export const CellDropdownItem = styled.div`
    background-color: ${props => props.isSelected ? 'lightGrey' : 'transparent'};
    color: ${props => props.isSelected ? 'white' : 'black'};
    &:hover {
        background-color: grey;
        color: white;
    }
`;