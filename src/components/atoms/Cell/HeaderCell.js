// styles
import Sort from "../../tokens/icons/Sort";
import { WHITE } from "../../uikit/colors";
import { HeaderCellContainer } from "./styles";

const HeaderCell = ({ value = "", onClick= () => {} }) => {
    return <HeaderCellContainer><span>{value}</span><span><Sort onClick={onClick} fill={WHITE}/></span></HeaderCellContainer>
};

export default HeaderCell;
