import { ButtonStyled } from '.';
import { useModal } from '../../utilities/appContext/appContext';

const Button = () => {
  const { show } = useModal();
  return (
    <ButtonStyled type="button" onClick={show}>
      Get started
    </ButtonStyled>
  );
};

export default Button;
