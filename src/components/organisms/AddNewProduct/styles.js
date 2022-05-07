import styled from "styled-components";
import { GREY } from "../../uikit/colors";
import { BORDER_RADIUS } from "../../uikit/dimensions";

export const AddNewProductContainer = styled.div`
    border: 1px solid ${GREY.c50};
    border-radius: ${BORDER_RADIUS.c10};
    display: grid;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;