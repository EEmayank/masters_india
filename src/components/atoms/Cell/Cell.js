// styles
import { CELL_TYPE_CHECKBOX, CELL_TYPE_DEFAULT, CELL_TYPE_DROPDOWN } from "../../../utility/constants";
import DropdownCell from "./DropdownCell";
import { CellContainer } from "./styles";

const Cell = ({
    value = "",
    type
}) => {
    const render = () => {
        switch (type) {
            case CELL_TYPE_CHECKBOX :
                return <input type="checkbox" />
            case CELL_TYPE_DEFAULT:
                return <>{value}</>
            case CELL_TYPE_DROPDOWN:
                    return <DropdownCell options={value}/>
            default:
                return <> </>
        }
    }
    return <CellContainer>
        {render()}
    </CellContainer>
}

export default Cell;
