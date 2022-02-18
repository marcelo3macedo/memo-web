import React from 'react';

import { randomBackground } from '@config/Backgrounds';

import { Wrapper, Content, Title, Description, Block, Header, Details, Opacity } from './styles';

export default function Public({ data }) {
  const background = (data && data.theme && data.theme.src) ? data.theme.src : randomBackground()
  
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
              <Title>{data.name}</Title>
              <Description>{data.description}</Description>
            </Details>
          </Header>        
        </Block>        
      </Content>
    </Wrapper>
  );
}