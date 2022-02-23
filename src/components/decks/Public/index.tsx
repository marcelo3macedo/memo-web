import React from 'react';
import { useDispatch } from 'react-redux';

import { randomBackground } from '@config/Backgrounds';

import { Wrapper, Content, Title, Description, Block, Header, Details, Opacity } from './styles';
import { openAction } from '@store/modules/deck/actions';

export default function Public({ data }) {
  const dispatch = useDispatch()
  const background = (data && data.theme && data.theme.src) ? data.theme.src : randomBackground()
  
  if (!data) {
    return <></>;
  }

  function openDeckClick() {
    dispatch(openAction({ deck: data }));
  }

  return (
    <Wrapper className='no-select' onClick={() => { openDeckClick() }}>
      <Content background={background}>
        <Opacity></Opacity>

        <Block>
          <Header>
            <Details>
              <Title>{data.name}</Title>
              <Description>{data.description}</Description>
            </Details>
          </Header>        
        </Block>        
      </Content>
    </Wrapper>
  );
}