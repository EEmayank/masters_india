// styles
import { TableContainer } from "./styles";

// components
import Row from "../../molecules/Row";
import { CATEGORY, ID, NAME, SUB_CATEGORY } from "../../../utility/api";
import { FIELD_TYPE_CATEGORY, FIELD_TYPE_PRODUCT, FIELD_TYPE_SUBCATEGORY, ROW_TYPE_ADD_NEW, ROW_TYPE_HEADING } from "../../../utility/constants";
import { RELATION_MAP_FOR_CATEGORY, RELATION_MAP_FOR_SUBCATEGORY } from "../../../utility/common";
import AddItemRow from "../../molecules/Row/AddItemRow";

const Table = ({
    data,
    addNewRow
}) => {
    const headerData = {
        [ID]: "",
        [NAME]: FIELD_TYPE_PRODUCT,
        [SUB_CATEGORY]: FIELD_TYPE_SUBCATEGORY,
        [CATEGORY]: FIELD_TYPE_CATEGORY,
    }

    const addNewItemRowData = {
        [RELATION_MAP_FOR_SUBCATEGORY]: {
            "Laptop" : ["Electronics"],
            "Mobile" : ["Electronics"],
            "Tennis" : ["Sports"],
            "Cricket" : ["Sports"]
          },
        [RELATION_MAP_FOR_CATEGORY]: {
            "Electronics" : ["Laptop", "Mobile"],
            "Sports": ["Tennis", "Cricket"]
          }
    }

    const handleSave = (productName, subcategory, category) => {

        // make post call

        // if success
        addNewRow(productName, subcategory, category)
    }

    return <TableContainer>
        <Row data={headerData} type={ROW_TYPE_HEADING} />
        {
            data.map (row => {
                const rowID = row[ID];
                return <Row key={rowID} data={row} />
            })
        }
        <AddItemRow data={addNewItemRowData} action={handleSave}/>
    </TableContainer>
}

export default Table;