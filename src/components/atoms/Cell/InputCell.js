import { CellContainer, CellInput } from "./styles"

const InputCell = ({value = "", onChange}) => {
    
    return <CellContainer>
        <CellInput value={value} onChange={onChange} placeholder="Enter name" />
    </CellContainer>
}

export default InputCell;