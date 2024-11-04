import React, { useRef } from 'react';
import './App.css';
import Header from "./Components/Layout/Header";
import Home from './Components/Home/Home';
import WeddingFlowers from './Components/WeddingFlowers/WeddingFlowers';
import EventFlowers from './Components/EventFlowers/EventFlowers';
import WeddingSubscription from './Components/WeddingSubscription/WeddingSubscription';
import FlowerSubscription from './Components/FlowerSubscription/FlowerSubscription';
import Contacts from './Components/Contacts/Contacts';
import WorkShops from './Components/WorkShops/WorkShops';
// eslint-disable-next-line
import stylesGlobal from "./styles/global.module.css";

function App() {


  const sectionRefs = {
    weddingFlowers: useRef(null),
    eventFlowers: useRef(null),
    weddingSubscription: useRef(null),
    flowerSubscription: useRef(null),
    contacts: useRef(null),
    workshops: useRef(null),
  }

  const scrollToSection = (sectionName) => {
    sectionRefs[sectionName]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <React.Fragment>
      <Header onScroll={scrollToSection} />
      <Home />
      <WeddingFlowers ref={sectionRefs.weddingFlowers} />
      <EventFlowers ref={sectionRefs.eventFlowers} />
      <WeddingSubscription ref={sectionRefs.weddingSubscription} />
      <FlowerSubscription ref={sectionRefs.flowerSubscription} />
      <WorkShops ref={sectionRefs.workshops} />
      <Contacts ref={sectionRefs.contacts} />
    </React.Fragment>

  );
}

export default App;
