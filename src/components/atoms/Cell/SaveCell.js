import { CellContainer } from "./styles";

const SaveCell = ({onClick}) => {
    return <CellContainer>
        <span onClick={onClick}>save</span>
    </CellContainer>
}

export default SaveCell;