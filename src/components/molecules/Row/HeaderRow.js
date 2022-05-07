// styles
import { HeaderRowContainer } from "./styles";

// components
import Cell from "../../atoms/Cell";

// constants
import { ROW_TYPE_HEADING } from "../../../utility/constants";

const HeaderRow = ({headersList}) => {
    return <HeaderRowContainer isSticky type={ROW_TYPE_HEADING}>
        {
            headersList.map(header => <Cell value={header}/>)
        }
</HeaderRowContainer>;
}

export default HeaderRow
