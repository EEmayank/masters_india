// styles
import { RowContainer } from './styles';

// components
import Cell from '../../atoms/Cell';

// constants
import { 
    CELL_TYPE_CHECKBOX, 
    CELL_TYPE_DEFAULT, 
    CELL_TYPE_DROPDOWN, 
    ROW_TYPE_ADD_NEW,
    ROW_TYPE_HEADING 
} from '../../../utility/constants';
import { 
    CATEGORY, 
    ID, 
    NAME, 
    SUB_CATEGORY 
} from '../../../utility/api';
import AddItemRow from './AddItemRow';

const Row = ({
    data = {},
    type = CELL_TYPE_DEFAULT
}) => {

    const productId = data[ID] ?? " - ";
    const productName = data[NAME] ?? " - ";
    const subcategory = data[SUB_CATEGORY] ?? " - ";
    const category = data[CATEGORY] ?? "-";

    return (function(){
        switch (type) {
            case ROW_TYPE_HEADING:
                return <RowContainer type={type}>
                    <Cell />
                    <Cell type={CELL_TYPE_DEFAULT} value={productName}/>
                    <Cell type={CELL_TYPE_DEFAULT} value={subcategory}/>
                    <Cell type={CELL_TYPE_DEFAULT} value={category}/>
                </RowContainer>;
            
            case ROW_TYPE_ADD_NEW:
                return <AddItemRow data={data}/>
        
            default:
                return <RowContainer type={type}>
                    <Cell type={type === ROW_TYPE_HEADING ? CELL_TYPE_DEFAULT : CELL_TYPE_CHECKBOX} value={productId}/>
                    <Cell type={CELL_TYPE_DEFAULT} value={productName}/>
                    <Cell type={CELL_TYPE_DEFAULT} value={subcategory}/>
                    <Cell type={CELL_TYPE_DEFAULT} value={category}/>
                </RowContainer>;
    }})()
}

export default Row;
