import { Contact } from '@config/Contact';
import React from 'react';
import { useTranslation } from 'react-multi-lang';

import { Wrapper, Content, Title, Paragraph } from './styles';

export default function Help() {
  const t = useTranslation();

  return (
    <Wrapper>
      <Content>
        <Title>{t('help.title')}</Title>
        <Paragraph>{t('help.message')}</Paragraph>
        <Paragraph>{t('help.contact_us')} {Contact.mail}</Paragraph>
      </Content>
    </Wrapper>
  ); 
}