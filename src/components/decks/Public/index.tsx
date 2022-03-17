import React from 'react';
import { useDispatch } from 'react-redux';

import { randomBackground } from '@config/Backgrounds';
import { PATH_DECK } from '@services/Navigation';
import { navigatePush } from '@store/modules/navigate/actions';

import { Wrapper, Content, Title, Description, Block, Header, Details, Opacity } from './styles';

export default function Public({ deck }) {
  const dispatch = useDispatch();
  const background = (deck && deck.theme && deck.theme.src) ? deck.theme.src : randomBackground();
  
  if (!deck) {
    return <></>;
  }

  function openDeckClick() {
    dispatch(navigatePush({ path: `${PATH_DECK}/${deck.path}/${deck.id}` }));
  }

  return (
    <Wrapper className='no-select' onClick={() => { openDeckClick() }}>
      <Content background={background}>
        <Opacity></Opacity>

        <Block>
          <Header>
            <Details>
              <Title>{deck.name}</Title>
              <Description>{deck.description}</Description>
            </Details>
          </Header>        
        </Block>        
      </Content>
    </Wrapper>
  );
}