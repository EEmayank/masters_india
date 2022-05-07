// styles
import { HeaderRowContainer } from "./styles";

// components
import HeaderCell from "../../atoms/Cell/HeaderCell";
import TextCell from "../../atoms/Cell/TextCell";

// constants
import { ROW_TYPE_HEADING } from "../../../utility/constants";

const HeaderRow = ({headersList, sortMethods}) => {

    return <HeaderRowContainer isSticky type={ROW_TYPE_HEADING}>
        <TextCell />
        {
            headersList.map(header => <HeaderCell value={header} onClick={sortMethods[header]}/>)
        }
</HeaderRowContainer>;
}

export default HeaderRow
