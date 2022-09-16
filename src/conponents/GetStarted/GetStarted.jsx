import { icons } from '../../assets';
import {
  GetStartedButton,
  GetStartedButtonContent,
  GetStartedGradientSpan,
  GetStartedIcon,
} from './GetStarted.styled';
import { useModal } from '../../utilities/appContext/appContext';

const GetStarted = () => {
  const { show } = useModal();
  return (
    <GetStartedButton type="button" onClick={show}>
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
