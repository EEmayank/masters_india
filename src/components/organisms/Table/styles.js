import styled from 'styled-components';
import { BORDER_RADIUS } from '../../uikit/dimensions';

export const TableContainer = styled.div`
 box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
 overflow : hidden;
 overflow-y: scroll;

 height: 100%;

 border-radius: ${BORDER_RADIUS.c5};

 &::-webkit-scrollbar {
     width: 0;
 }
`;
