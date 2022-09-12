import {
  AuthorAvatar,
  AuthorContainer,
  AuthorDetails,
  AuthorName,
  AuthorTitle,
  FeedbackContent,
  FeedbsckCardContainer,
  Icon,
} from './FeedbackCard.styled';
import { icons } from '../../assets';

const FeedbackCard = ({ name, title, content, img }) => {
  return (
    <FeedbsckCardContainer>
      <Icon>
        <use href={`${icons}#icon-quotes`} />
      </Icon>
      <FeedbackContent>{content}</FeedbackContent>
      <AuthorContainer>
        <AuthorAvatar src={img} alt={`${name} avatar`} title={name} />
        <AuthorDetails>
          <AuthorName>{name}</AuthorName>
          <AuthorTitle>{title}</AuthorTitle>
        </AuthorDetails>
      </AuthorContainer>
    </FeedbsckCardContainer>
  );
};

export default FeedbackCard;
