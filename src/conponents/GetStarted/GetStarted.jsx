import { icons } from '../../assets';
import {
  GetStartedButton,
  GetStartedButtonContent,
  GetStartedGradientSpan,
  GetStartedIcon,
} from './GetStarted.styled';
import { useModal } from '../../utilities/appContext/appContext';

const GetStarted = () => {
  const { toggle } = useModal();
  return (
    <GetStartedButton onClick={toggle}>
      <GetStartedButtonContent>
        <GetStartedGradientSpan>
          Get
          <GetStartedIcon aria-label="Get started">
            <use href={`${icons}#icon-arrow-up`} />
          </GetStartedIcon>
        </GetStartedGradientSpan>
        <GetStartedGradientSpan>Started</GetStartedGradientSpan>
      </GetStartedButtonContent>
    </GetStartedButton>
  );
};

export default GetStarted;
