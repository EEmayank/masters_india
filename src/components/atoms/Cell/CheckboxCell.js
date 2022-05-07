import { CellContainer, CellCheckbox } from "./styles"

const CheckboxCell = ({id, action}) => {

    const handleCheckboxClick = e => action(id, e.target.checked)
    
    return <CellContainer>
        <CellCheckbox onClick={handleCheckboxClick} type="checkbox" />
    </CellContainer>
}

export default CheckboxCell;
