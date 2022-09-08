import { Section, Container } from '../../utilities/styles';
import { STATS } from '../../constatnts';
import { StatsList, StatsListItem, StatTitle, StatValue } from './Stats.styled';

const Stats = () => {
  return (
    <Section>
      <Container>
        <StatsList>
          {STATS.map(stat => (
            <StatsListItem key={stat.id}>
              <StatValue>{stat.value}</StatValue>
              <StatTitle>{stat.title}</StatTitle>
            </StatsListItem>
          ))}
        </StatsList>
      </Container>
    </Section>
  );
};

export default Stats;
