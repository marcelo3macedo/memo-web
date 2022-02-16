import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { useTranslation } from 'react-multi-lang';

import { openAction } from '@store/modules/deck/actions';
import { randomBackground } from '@config/Backgrounds';
import IconSmall from '@components/icons/IconSmall';
import ButtonSecondary from '@components/button/ButtonSecondary';
import { editAction, removeModalAction } from '@store/modules/personal/actions';

import { Wrapper, Content, Title, Block, Header, Footer, Details, SubTitle, Options, Statuses, Status, StatusTitle, View, OptionsBox, OptionBox, OptionBoxTitle, Opacity } from './styles';

export default function Private({ data }) {
  const t = useTranslation();
  const dispatch = useDispatch();
  const [ options, setOptions ] = useState(false);
  const background = (data && data.theme && data.theme.src) ? data.theme.src : randomBackground()
  const statusTitle = data.isPublic ? t('session.public') : t('session.private')
  const frequencyName = data.frequency ? data.frequency.name : null
  
  function openDeckClick() {
    dispatch(openAction({ deck: data }));
  }

  function removeDeck() {
    dispatch(removeModalAction({ visible: true, deck: data }))
  }

  function editDeck() {
    dispatch(editAction({ deck: data }))
  }

  function openOptionsBox() {
    setOptions(!options)
  }

  if (!data) {
    return <></>;
  }

  return (
    <Wrapper className='no-select'>
      <Content background={background}>
        <Opacity></Opacity>

        <Block>
          <Header>
            <Details>
              <SubTitle>{t('decks.header')}</SubTitle>
              <Title>{data.name}</Title>
            </Details>
            <Options onClick={() => { openOptionsBox() }}>
              <IconSmall name="settings" />

              <OptionsBox showOptions={options}>
                <OptionBox onClick={editDeck}>
                  <OptionBoxTitle>{t('actions.edit')}</OptionBoxTitle>
                </OptionBox>
                <OptionBox onClick={removeDeck}>
                  <OptionBoxTitle>{t('actions.delete')}</OptionBoxTitle>
                </OptionBox>
              </OptionsBox>
            </Options>
          </Header>
          <Footer>
            <Statuses>
              <Status>
                <IconSmall name="visibility" />
                <StatusTitle>{statusTitle}</StatusTitle>
              </Status>
              <Status>
                <IconSmall name="repeat" />
                <StatusTitle>{frequencyName}</StatusTitle>
              </Status>
            </Statuses>
            <View onClick={openDeckClick}>
              <ButtonSecondary content={t('decks.view')} />
            </View>
          </Footer>          
        </Block>        
      </Content>
    </Wrapper>
  );
}