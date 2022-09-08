import {
  FeatureCardIcon,
  FeatureCardIconImage,
  FeatureCardInfo,
  FeatureCardInfoText,
  FeatureCardInfoTitle,
  FeaturesCardContainer,
} from './FeaturesCard.styled';

const FeaturesCard = ({ icon, title, content }) => {
  return (
    <FeaturesCardContainer>
      <FeatureCardIcon>
        <FeatureCardIconImage src={icon} />
      </FeatureCardIcon>
      <FeatureCardInfo>
        <FeatureCardInfoTitle>{title}</FeatureCardInfoTitle>
        <FeatureCardInfoText>{content}</FeatureCardInfoText>
      </FeatureCardInfo>
    </FeaturesCardContainer>
  );
};

export default FeaturesCard;
