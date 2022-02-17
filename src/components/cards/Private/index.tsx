import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-multi-lang';

import { editAction, removeAction } from '@store/modules/card/actions';
import IconSmall from '@components/icons/IconSmall';

import { Wrapper, Container, Header, Area, Title, Content, SecretContent, Options, OptionsBox, OptionBox, OptionBoxTitle } from './styles';

export default function Private({ card }) {
  const dispatch = useDispatch();
  const t = useTranslation();
  const [ options, setOptions ] = useState(false);

  function openOptionsBox() {
    setOptions(!options)
  }

  function editClick() {
    dispatch(editAction(card))
  }

  function removeClick() {
    dispatch(removeAction(card))
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
                <OptionBox onClick={editClick}>
                  <OptionBoxTitle>{t('actions.edit')}</OptionBoxTitle>
                </OptionBox>
                <OptionBox onClick={removeClick}>
                  <OptionBoxTitle>{t('actions.delete')}</OptionBoxTitle>
                </OptionBox>
              </OptionsBox>
            </Options>
        </Area>
      </Container>
    </Wrapper>
  );
}