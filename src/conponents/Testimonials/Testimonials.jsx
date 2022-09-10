import { Section, Container } from '../../utilities/styles';
import { TestimonialsContainer, TestimonialsText, TestimonialsTitle } from './Testimonials.styled';

const Testimonials = () => {
  return (
    <Section>
      <Container>
        <TestimonialsContainer>
          <TestimonialsTitle>What people are saying about us</TestimonialsTitle>
          <TestimonialsText>
            Everything you need to accept card payments and grow your business anywhere on the
            planet.
          </TestimonialsText>
        </TestimonialsContainer>
      </Container>
    </Section>
  );
};

export default Testimonials;
