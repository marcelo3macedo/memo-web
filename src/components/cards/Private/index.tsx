import React, { useState } from 'react';
import { useTranslation } from 'react-multi-lang';

import IconSmall from '@components/icons/IconSmall';

import { Wrapper, Container, Header, Area, Title, Content, SecretContent, Options, OptionsBox, OptionBox, OptionBoxTitle } from './styles';

export default function Private({ card, actions }) {
  const t = useTranslation();
  const [ options, setOptions ] = useState(false);

  function openOptionsBox() {
    setOptions(!options)
  }

  function actionOpenClick(screen) {
    if (!actions.open) {
      return;
    }

    actions.open({ screen, card });
  }
  
  return (
    <Wrapper>
      <Container className='no-select'>
        <Area>
          <Header>
            <Title>{card.title}</Title>
            <Content>{card.content}</Content>
            <SecretContent>{card.secretContent}</SecretContent>
          </Header>
          <Options onClick={() => { openOptionsBox() }}>
              <IconSmall name="settings" />

              <OptionsBox showOptions={options}>
                <OptionBox onClick={() => { actionOpenClick('edit-card') }}>
                  <OptionBoxTitle>{t('actions.edit')}</OptionBoxTitle>
                </OptionBox>
                <OptionBox onClick={() => { actionOpenClick('remove-card') }}>
                  <OptionBoxTitle>{t('actions.delete')}</OptionBoxTitle>
                </OptionBox>
              </OptionsBox>
            </Options>
        </Area>
      </Container>
    </Wrapper>
  );
}