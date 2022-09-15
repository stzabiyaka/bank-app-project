import React from 'react';
import AppBar from '../AppBar';
import Hero from '../Hero';
import Stats from '../Stats/Stats';
import Features from '../Features';
import Billing from '../Billing';
import CardDeal from '../CardDeal';
import Testimonials from '../Testimonials';
import Clients from '../Clients';
import ClickToAction from '../ClickToAction';
import Footer from '../Footer';
import { AppContainer, Main } from '.';
import Modal from '../Modal/Modal';
import { useModal } from '../../utilities/appContext/appContext';

const App = () => {
  const { showModal } = useModal();
  return (
    <AppContainer>
      <AppBar />
      <Main>
        <Hero />
        <Stats />
        <Features />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <ClickToAction />
      </Main>
      <Footer />
      {showModal && <Modal>Form</Modal>}
    </AppContainer>
  );
};

export default App;
