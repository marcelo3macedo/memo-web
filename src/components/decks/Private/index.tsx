import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { useTranslation } from 'react-multi-lang';

import { randomBackground } from '@config/Backgrounds';
import IconSmall from '@components/icons/IconSmall';
import ButtonSecondary from '@components/button/ButtonSecondary';
import { editAction, removeModalAction } from '@store/modules/personal/actions';
import { navigatePush } from '@store/modules/navigate/actions';
import { PATH_DECK } from '@services/Navigation';

import { Wrapper, Content, Title, Block, Header, Footer, Details, SubTitle, Options, Statuses, Status, StatusTitle, View, OptionsBox, OptionBox, OptionBoxTitle, Opacity } from './styles';


export default function Private({ deck }) {
  const t = useTranslation();
  const dispatch = useDispatch();
  const [ options, setOptions ] = useState(false);
  const background = (deck && deck.theme && deck.theme.src) ? deck.theme.src : randomBackground();
  const statusTitle = deck.isPublic ? t('session.public') : t('session.private');
  const frequencyName = deck.frequency ? deck.frequency.name : null;
  
  function openDeckClick() {
    dispatch(navigatePush({ path: `${PATH_DECK}/${deck.path}/${deck.id}` }));
  }

  function removeDeck() {
    dispatch(removeModalAction({ visible: true, deck }))
  }

  function editDeck() {
    dispatch(editAction({ deck }))
  }

  function openOptionsBox() {
    setOptions(!options)
  }

  if (!deck) {
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
              <Title>{deck.name}</Title>
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
              {frequencyName ? (
                <Status>
                  <IconSmall name="repeat" />
                  <StatusTitle>{frequencyName}</StatusTitle>
                </Status>
              ) : <></>}              
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