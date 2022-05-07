// styles
import { RowContainer } from './styles';

// components
import TextCell from '../../atoms/Cell/TextCell';

// constants
import { CELL_TYPE_DEFAULT } from '../../../utility/constants';
import { 
    CATEGORY, 
    ID, 
    NAME, 
    SUB_CATEGORY 
} from '../../../utility/api';
import CheckboxCell from '../../atoms/Cell/CheckboxCell';

const Row = ({
    data = {},
    type = CELL_TYPE_DEFAULT,
    handleRemoveList
}) => {

    const productId = data[ID] ?? " - ";
    const productName = data[NAME] ?? " - ";
    const subcategory = data[SUB_CATEGORY] ?? " - ";
    const category = data[CATEGORY] ?? "-";

    return <RowContainer type={type}>
        <CheckboxCell id={productId} action={handleRemoveList}/>
        <TextCell type={CELL_TYPE_DEFAULT} value={productName}/>
        <TextCell type={CELL_TYPE_DEFAULT} value={subcategory}/>
        <TextCell type={CELL_TYPE_DEFAULT} value={category}/>
    </RowContainer>;
}

export default Row;
