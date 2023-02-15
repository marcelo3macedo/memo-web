import React from 'react';
import { useTranslation } from 'react-multi-lang';

import { Wrapper, Content, Option, Title, Quantity } from './styles';

export default function Options({ options, answered }) {
  const t = useTranslation()

  if (!answered || !options) return <></>

  function getQuantity(id) {
    return answered.filter(a => a.difficultyId === id).length
  }

  return (
    <Wrapper>
      <Title>{t('reviewCompleted.checkYourSessionResponses')}</Title>
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