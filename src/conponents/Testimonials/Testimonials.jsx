import { Section } from '../../utilities/styles';
import { FEEDBACK } from '../../constatnts';
import FeedbackCard from '../FeedbackCard';
import {
  TestimonialsContainer,
  TestimonialsInfoContainer,
  TestimonialsInfoText,
  TestimonialsInfoTitle,
  TestimonialsList,
} from './Testimonials.styled';

const Testimonials = () => {
  return (
    <Section id="clients">
      <TestimonialsContainer>
        <TestimonialsInfoContainer>
          <TestimonialsInfoTitle>What people are saying about us</TestimonialsInfoTitle>
          <TestimonialsInfoText>
            Everything you need to accept card payments and grow your business anywhere on the
            planet.
          </TestimonialsInfoText>
        </TestimonialsInfoContainer>
        <TestimonialsList>
          {FEEDBACK.map(({ id, ...restProps }) => (
            <FeedbackCard key={id} {...restProps} />
          ))}
        </TestimonialsList>
      </TestimonialsContainer>
    </Section>
  );
};

export default Testimonials;
