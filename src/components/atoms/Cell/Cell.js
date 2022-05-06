// styles
import { CELL_TYPE_CHECKBOX, CELL_TYPE_DEFAULT } from "../../../utility/constants";
import { CellContainer } from "./styles";

const Cell = ({
    value,
    type
}) => {
    const render = () => {
        switch (type) {
            case CELL_TYPE_CHECKBOX :
                return <input type="checkbox" />
            case CELL_TYPE_DEFAULT:
                return <>{value}</>
            default:
                console.error("invalid type ", type);
                return <> </>
        }
    }
    return <CellContainer>
        {render()}
    </CellContainer>
}

export default Cell;
