import React from 'react';

import IconSmall from "@components/icons/IconSmall";
import { Wrapper, Content, Info, Quantity, Title, Opacity, Data } from './styles';

export default function DeckColumn({ data }) {
  const background = "https://www.michaelbuble.com/sites/g/files/g2000002856/f/Sample-image10-highres.jpg";
  const quantity = 100;
  const icon = "user";

  return (
    <Wrapper>
      <Content background={background}>
        <Opacity></Opacity>
        <Data>
          <Title>{data.name}</Title>
          <Info>
            <IconSmall name={icon} />
            <Quantity>{quantity}</Quantity>
          </Info>
        </Data>
      </Content>
    </Wrapper>
  );
}