import React from 'react';
import AppBar from '../AppBar';
import Hero from '../Hero';
import Stats from '../Stats/Stats';

import { AppContainer } from '.';
import Business from '../Business';
import Billing from '../Billing';
import CardDeal from '../CardDeal';
import Testimonials from '../Testimonials';
import Clients from '../Clients';
import ClickToAction from '../ClickToAction';
import Footer from '../Footer';
import FeedbackCard from '../FeedbackCard';
import GetStarted from '../GetStarted';

const App = () => {
  return (
    <AppContainer>
      <AppBar />
      <Hero />
      <Stats />
      <Business />
      <Billing />
      <CardDeal />
      <Testimonials />
      <Clients />
      <ClickToAction />
      <Footer />
    </AppContainer>
  );
};

export default App;
