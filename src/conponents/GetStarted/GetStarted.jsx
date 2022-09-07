import { arrowUp } from '../../assets';
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
          <GetStartedIcon src={arrowUp} alt="arrow up" title="Get started" />
        </GetStartedGradientSpan>
        <GetStartedGradientSpan>Started</GetStartedGradientSpan>
      </GetStartedButtonContent>
    </GetStartedButton>
  );
};

export default GetStarted;
