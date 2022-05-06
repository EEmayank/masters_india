import { ButtonContainer } from "./styles";

const Button = ({
    title,
    action,
    isDisabled
}) => {
    return <ButtonContainer disabled={isDisabled} onClick={action}>{title}</ButtonContainer>
}

export default Button;