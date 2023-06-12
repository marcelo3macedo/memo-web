import { RootState } from '@store/modules/rootReducer';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import CardBack from '../CardBack';
import CardFront from '../CardFront';

import { Wrapper, Content } from './styles';

export default function Card() {
  const { session, position, options } = useSelector(
    (state: RootState) => state.review
  );
  const [flip, setFlip] = useState(false);

  function changeFlip() {
    setFlip(!flip);
  }

  return (
    <Wrapper>
      <Content flip={flip} className='no-select'>
        <CardFront session={session} position={position} action={changeFlip} />
        <CardBack
          session={session}
          position={position}
          options={options}
          flip={flip}
          action={changeFlip}
        />
      </Content>
    </Wrapper>
  );
}
