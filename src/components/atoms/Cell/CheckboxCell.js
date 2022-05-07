import { useEffect, useRef } from "react"
import { CellContainer, CellCheckbox } from "./styles"

const CheckboxCell = ({id, action, isChecked}) => {

    const checkboxRef = useRef();

    useEffect(() => {
        checkboxRef.current.checked = isChecked;
        handleCheckboxClick(checkboxRef.current);
    }, [isChecked])

    const handleCheckboxClick = () => action(id, checkboxRef.current.checked)
    
    return <CellContainer>
        <CellCheckbox ref={checkboxRef} onClick={handleCheckboxClick} type="checkbox" />
    </CellContainer>
}

export default CheckboxCell;
