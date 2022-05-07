import Floppy from "../../tokens/icons/Floppy";
import { CellContainer } from "./styles";

const SaveCell = ({onClick}) => {
    return <CellContainer>
        <span onClick={onClick}><Floppy width="15px"/></span>
    </CellContainer>
}

export default SaveCell;