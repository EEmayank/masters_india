import { BLUE } from "../../uikit/colors";
import { ButtonContainer } from "./styles";

const Button = ({
    title,
    action,
    isDisabled,
    color = BLUE
}) => {
    return <ButtonContainer color={color} disabled={isDisabled} onClick={action}>{title}</ButtonContainer>
}

export default Button;