import React from 'react';
import { useTranslation } from 'react-multi-lang';

import IndexPrivate from '../IndexPrivate';
import { SEE_MORE_TYPE_END } from '@constants/SeeMore';
import SeeMore from '@modules/components/elements/SeeMore';
import IListCards from '@modules/cards/dtos/IListCards';

import { Wrapper, Content, Message } from './styles';

export default function List({ cards, type }:IListCards) {
  const t = useTranslation()

  function seeMoreAction() {
  }

  if (!cards || cards.length === 0) {
    return <Message>{t('session.noCards')}</Message>
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