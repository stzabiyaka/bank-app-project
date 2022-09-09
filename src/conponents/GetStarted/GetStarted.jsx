import { icons } from '../../assets';
import {
  GetStartedButton,
  GetStartedButtonContent,
  GetStartedGradientSpan,
  GetStartedIcon,
} from './GetStarted.styled';

const GetStarted = () => {
  return (
    <GetStartedButton>
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
