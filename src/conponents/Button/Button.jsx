import { ButtonStyled } from '.';
import { useModal } from '../../utilities/appContext/appContext';

const Button = () => {
  const { toggle } = useModal();
  return <ButtonStyled onClick={toggle}>Get started</ButtonStyled>;
};

export default Button;
