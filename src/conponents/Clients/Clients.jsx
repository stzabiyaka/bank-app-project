import { Section, Container } from '../../utilities/styles';
import { CLIENTS } from '../../constatnts';
import { clients } from '../../assets';
import { ClientIcon, ClientsLink, ClientsList, ClientsListItem } from './Clients.styled';

const Clients = () => {
  return (
    <Section pt="50px" pb="50px">
      <Container>
        <ClientsList>
          {CLIENTS.map(({ id, logo, link }) => (
            <ClientsListItem key={id}>
              <ClientsLink
                href={link}
                target="_blank"
                title={`Go to ${logo}`}
                rel="noreferrer noopener nofollow"
              >
                <ClientIcon aria-label={logo}>
                  <use href={`${clients}#icon-${logo}`} />
                </ClientIcon>
              </ClientsLink>
            </ClientsListItem>
          ))}
        </ClientsList>
      </Container>
    </Section>
  );
};

export default Clients;
