import {
  FeatureCardIcon,
  FeatureCardIconImage,
  FeatureCardInfo,
  FeatureCardInfoText,
  FeatureCardInfoTitle,
  FeaturesCardContainer,
} from './FeaturesCard.styled';
import { icons } from '../../assets';

const FeaturesCard = ({ icon, title, content }) => {
  return (
    <FeaturesCardContainer>
      <FeatureCardIcon>
        <FeatureCardIconImage>
          <use href={`${icons}#icon-${icon}`} />
        </FeatureCardIconImage>
      </FeatureCardIcon>
      <FeatureCardInfo>
        <FeatureCardInfoTitle>{title}</FeatureCardInfoTitle>
        <FeatureCardInfoText>{content}</FeatureCardInfoText>
      </FeatureCardInfo>
    </FeaturesCardContainer>
  );
};

export default FeaturesCard;
