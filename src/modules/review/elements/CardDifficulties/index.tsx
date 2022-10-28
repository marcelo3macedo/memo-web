import React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-multi-lang';

import { setOptionAction } from '@store/modules/review/actions';

import { Wrapper, Content, Action, ActionValue, Message, Info } from './styles';

export default function CardDifficulties({ card, options, action }) {
  const t = useTranslation()
  const dispatch = useDispatch()
  
  function optionClick(option) {
    action()
    dispatch(setOptionAction({ card, option }));
  }
  
  return (
    <Wrapper>
      <Message>{t('review.choose')}</Message>
      <Content>
        {options.map(o => (
          <Action key={o.id} onClick={() => optionClick(o)}>
            <ActionValue>{o.name}</ActionValue>
          </Action>
        ))}
      </Content>
      <Info>{t('review.next')}</Info>
    </Wrapper>
  );
}