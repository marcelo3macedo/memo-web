import React from 'react';

import Highlight from '@components/containers/home/Highlight';
import Technique from '@components/containers/home/Technique';
import HowItWorks from '@components/containers/home/HowItWorks';
import Methods from '@components/containers/home/Methods';
import TryIt from '@components/containers/home/TryIt';
import Footer from '@components/containers/home/Footer';

import { Wrapper, Content } from './styles';

export default function Home() {
  return (
    <Wrapper>
      <Content>
        <Highlight />
        <Technique />
        <HowItWorks />
        <Methods />
        <TryIt />
        <Footer />
      </Content>
    </Wrapper>
  ); 
}