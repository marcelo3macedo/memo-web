import React from 'react';
import { useTranslation } from 'react-multi-lang';

import { Wrapper, Content, Title, Paragraph } from './styles';

export default function Help() {
  const t = useTranslation();
  const contact = process.env.REACT_APP_CONTACT;

  return (
    <Wrapper>
      <Content>
        <Title>{t('help.title')}</Title>
        <Paragraph>{t('help.message')}</Paragraph>
        <Paragraph>{t('help.contact_us')} {contact}</Paragraph>
      </Content>
    </Wrapper>
  ); 
}