
import { useRef, useState } from "react";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import DownArrow from "../../tokens/icons/DownArrow";
import { 
    CellContainer, 
    CellDropdownContainer,
    CellDropdownItem,
    DropdownLabel 
} from "./styles"

const DropdownCell = ({options = [], selectedValue = "", onChange, style}) => {

    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const dropdownContainerRef = useRef();
    const changeSelectedItem = (index) => {
        onChange(options[index])
    }

    const handleDropdownClick = () => setIsMenuVisible(!isMenuVisible);

    const collapseDropdown = () => setIsMenuVisible(false);

    useOnClickOutside(dropdownContainerRef, collapseDropdown)

    return <CellContainer style={style}>
        <DropdownLabel onClick={handleDropdownClick}>
            <span>{selectedValue}</span>
            <span><DownArrow/></span>
        </DropdownLabel>
        <CellDropdownContainer toggelDropdown={isMenuVisible} ref={dropdownContainerRef}>
            {
                options.map((option, index) => {
                    return <CellDropdownItem isSelected={option === selectedValue} key={`${index}_${option}`} onClick={() => changeSelectedItem(index)}>{option}</CellDropdownItem>
                })
            }
        </CellDropdownContainer>
    </CellContainer>
}

export default DropdownCell