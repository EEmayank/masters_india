import { CellContainer, CellInput } from "./styles"

const InputCell = ({value = "", onChange, style}) => {
    
    return <CellContainer style={style}>
        <CellInput value={value} onChange={onChange} placeholder="Enter product name" />
    </CellContainer>
}

export default InputCell;