// styles
import { CellContainer } from "./styles";

const TextCell = ({ value = "", onClick= () => {} }) => <CellContainer onClick={onClick}>{value}</CellContainer>;

export default TextCell;
