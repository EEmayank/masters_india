// styles
import { RowContainer } from "./styles";

// components
import Cell from "../../atoms/Cell";

// constants
import { ROW_TYPE_HEADING } from "../../../utility/constants";

const HeaderRow = ({headersList}) => {
    return <RowContainer type={ROW_TYPE_HEADING}>
        {
            headersList.map(header => <Cell value={header}/>)
        }
</RowContainer>;
}

export default HeaderRow
