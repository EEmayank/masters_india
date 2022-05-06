import styled from 'styled-components';
import { ROW_TYPE_HEADING } from '../../../utility/constants';

export const RowContainer = styled.div`
    border: 1px solid blue;

    display: grid;
    grid-template-columns: 42px 1fr 1fr 1fr;

    ${({type}) => {
        if (type === ROW_TYPE_HEADING) {
            return `
                font-size: 15px;
                font-weight: 600;
                background-color: grey;
                color: white;
            `;
        }

        return `
        
        `;
    }}
`;
