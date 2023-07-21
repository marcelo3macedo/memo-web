import IconSmall from '@components/icons/IconSmall';
import { useState } from 'react';
import { useTranslation } from 'react-multi-lang';

import {
  Block,
  Content,
  Details,
  Footer,
  Header,
  Opacity,
  OptionBox,
  OptionBoxTitle,
  Options,
  OptionsBox,
  Status,
  StatusTitle,
  Statuses,
  SubTitle,
  Title,
  View,
  Wrapper
} from './styles';

export default function Private({ deck }) {
  const t = useTranslation();
  const [options, setOptions] = useState(false);
  const statusTitle = deck.isPublic
    ? t('session.public')
    : t('session.private');
  const frequencyName = deck.frequency ? deck.frequency.name : null;

  function openDeckClick() {}

  function removeDeck() {}

  function editDeck() {}

  function openOptionsBox() {
    setOptions(!options);
  }

  if (!deck) {
    return <></>;
  }

  return (
    <Wrapper className="no-select">
      <Content>
        <Opacity></Opacity>

        <Block>
          <Header>
            <Details>
              <SubTitle>{t('decks.header')}</SubTitle>
              <Title>{deck.name}</Title>
            </Details>
            <Options
              onClick={() => {
                openOptionsBox();
              }}>
              <IconSmall name="settings" />

              <OptionsBox>
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
              ) : (
                <></>
              )}
            </Statuses>
            <View onClick={openDeckClick}></View>
          </Footer>
        </Block>
      </Content>
    </Wrapper>
  );
}
