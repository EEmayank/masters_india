// styles
import { TableContainer } from "./styles";

// components
import Row from "../../molecules/Row";
import { CATEGORY, ID, NAME, SUB_CATEGORY } from "../../../utility/api";
import { FIELD_TYPE_CATEGORY, FIELD_TYPE_PRODUCT, FIELD_TYPE_SUBCATEGORY, ROW_TYPE_HEADING } from "../../../utility/constants";

const Table = ({
    data
}) => {
    const headerData = {
        [ID]: "",
        [NAME]: FIELD_TYPE_PRODUCT,
        [SUB_CATEGORY]: FIELD_TYPE_SUBCATEGORY,
        [CATEGORY]: FIELD_TYPE_CATEGORY,
    }
    return <TableContainer>
        <Row data={headerData} type={ROW_TYPE_HEADING} />
        {
            data.map (row => {
                const rowID = row[ID];
                return <Row key={rowID} data={row} />
            })
        }
    </TableContainer>
}

export default Table;