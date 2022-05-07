import { useState } from "react";
import { CellContainer, CellDropdownContainer, CellDropdownItem } from "./styles"

const DropdownCell = ({options = [], selectedValue = "", onChange}) => {

    const [isMenuVisible, setIsMenuVisible] = useState(false);
    
    const changeSelectedItem = (index) => {
        onChange(options[index])
    }

    const handleDropdownClick = () => {

    }
    return <CellContainer onClick={handleDropdownClick}>
        <span>{selectedValue} *</span>
        <CellDropdownContainer>
            {
                options.map((option, index) => {
                    return <CellDropdownItem isSelected={option === selectedValue} key={`${index}_${option}`} onClick={() => changeSelectedItem(index)}>{option}</CellDropdownItem>
                })
            }
        </CellDropdownContainer>
    </CellContainer>
}

export default DropdownCell