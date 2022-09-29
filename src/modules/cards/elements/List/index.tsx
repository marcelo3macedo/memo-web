import React from 'react';

import IndexPrivate from '../IndexPrivate';
import { SEE_MORE_TYPE_END } from '@constants/SeeMore';
import SeeMore from '@modules/components/elements/SeeMore';
import IListCards from '@modules/cards/dtos/IListCards';

import { Wrapper, Content } from './styles';

export default function List({ cards, type }:IListCards) {
  function seeMoreAction() {
  }

  return (
    <Wrapper>
      <Content>
        { cards.map((c, i) => <IndexPrivate card={c} key={i} />)}
        <SeeMore elements={cards} type={SEE_MORE_TYPE_END} callback={seeMoreAction}  />
      </Content>
    </Wrapper>
  );
}