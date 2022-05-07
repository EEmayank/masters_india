import styled from "styled-components";

export const InventoryPageLayout = styled.section`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 50px;

    height: 100vh;

    display: grid;
    grid-template-rows: 1fr 1fr 1fr;

    border: 1px solid red;
`;

export const InventoryActionBar = styled.div`
    border: 1px solid blue;
`;

export const InventoryTable = styled.div`
    border: 3px solid lime;

`;


export const InventoryFooter = styled.div`
    text-align: right;
    border: 1px solid blue;
`;