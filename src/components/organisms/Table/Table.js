// styles
import { TableContainer } from "./styles";

// components
import Row from "../../molecules/Row";
import HeaderRow from "../../molecules/Row/HeaderRow";

// constants
import { ID } from "../../../utility/api";
import { FIELD_TYPE_CATEGORY, FIELD_TYPE_PRODUCT, FIELD_TYPE_SUBCATEGORY } from "../../../utility/constants";

const Table = ({
    data,
    handleRemoveList,
    sortMethods
}) => {
    return <TableContainer>
        <HeaderRow sortMethods={sortMethods} headersList={[FIELD_TYPE_PRODUCT, FIELD_TYPE_SUBCATEGORY, FIELD_TYPE_CATEGORY]} />
        {
            data.map (row => {
                const rowID = row[ID];
                return <Row key={rowID} data={row} handleRemoveList={handleRemoveList}/>
            })
        }
    </TableContainer>
}

export default Table;