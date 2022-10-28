import React from 'react';

import { Wrapper, Content, Option, Title, Quantity } from './styles';

export default function Options({ options, answered }) {
  if (!answered || !options) return <></>

  function getQuantity(id) {
    return answered.filter(a => a.difficultyId === id).length
  }

  return (
    <Wrapper>
      <Content>
        {options.map((o, i) => (
          <Option key={i}>
            <Quantity>{getQuantity(o.id)}</Quantity>
            <Title>{o.name}</Title>
          </Option>
        ))}
      </Content>
    </Wrapper>
  );
}