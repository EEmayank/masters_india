import { CellContainer } from "./styles"

const InputCell = ({value = "", onChange}) => {
    
    return <CellContainer>
        <input value={value} onChange={onChange} />
    </CellContainer>
}

export default InputCell;