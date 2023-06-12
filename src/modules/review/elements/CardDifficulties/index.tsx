import { setOptionAction } from '@store/modules/review/actions';
import React from 'react';
import { useTranslation } from 'react-multi-lang';
import { useDispatch } from 'react-redux';

import {
  Wrapper,
  Content,
  Action,
  ActionValue,
  ActionWrapper,
  Message,
  Info,
} from './styles';

export default function CardDifficulties({ card, options, action }: any) {
  const t = useTranslation();
  const dispatch = useDispatch();

  function optionClick(option) {
    action();
    dispatch(setOptionAction({ card, option }));
  }

  return (
    <Wrapper>
      <Message>{t('review.choose')}</Message>
      <Content>
        {options.map(o => (
          <Action key={o.id} onClick={() => optionClick(o)}>
            <ActionWrapper>
              <ActionValue>{o.name}</ActionValue>
            </ActionWrapper>
          </Action>
        ))}
      </Content>
      <Info>{t('review.next')}</Info>
    </Wrapper>
  );
}
