// styles
import { TableContainer } from "./styles";

// components
import Row from "../../molecules/Row";
import HeaderRow from "../../molecules/Row/HeaderRow";

// constants
import { ID } from "../../../utility/api";

const Table = ({
    data,
    handleRemoveList
}) => {
    return <TableContainer>
        <HeaderRow headersList={['', 'Products', 'Subcategory', 'Category']} />
        {
            data.map (row => {
                const rowID = row[ID];
                return <Row key={rowID} data={row} handleRemoveList={handleRemoveList}/>
            })
        }
    </TableContainer>
}

export default Table;