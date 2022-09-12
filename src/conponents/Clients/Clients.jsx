import { Section, Container } from '../../utilities/styles';
import { CLIENTS } from '../../constatnts';
import { clients } from '../../assets';
import { ClientIcon, ClientsList, ClientsListItem } from './Clients.styled';

const Clients = () => {
  return (
    <Section>
      <Container>
        <ClientsList>
          {CLIENTS.map(({ id, logo }) => (
            <ClientsListItem key={id}>
              <ClientIcon aria-label={logo}>
                <use href={`${clients}#icon-${logo}`} />
              </ClientIcon>
            </ClientsListItem>
          ))}
        </ClientsList>
      </Container>
    </Section>
  );
};

export default Clients;
