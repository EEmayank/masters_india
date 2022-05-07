import styled from "styled-components";

export const InventoryPageLayout = styled.section`
    max-width: 1200px;
    margin: 20px auto;
    padding: 0 50px;

    height: calc(100vh - 40px);

    display: grid;
    grid-template-rows: max-content 1fr max-content;
    gap: 20px;
`;

export const InventoryActionBar = styled.div``;

export const InventoryFooter = styled.div`
    text-align: right;
`;