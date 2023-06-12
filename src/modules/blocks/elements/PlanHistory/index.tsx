import { PATH_TRANSACTIONS } from '@services/Navigation';
import { navigatePush } from '@store/mods/navigate/actions';
import React from 'react';
import { useTranslation } from 'react-multi-lang';
import { useDispatch } from 'react-redux';

import { Wrapper, Container, Title } from './styles';

export default function PlanHistory() {
  const t = useTranslation();
  const dispatch = useDispatch();

  function navigateToHistory() {
    dispatch(navigatePush({ path: PATH_TRANSACTIONS }));
  }

  return (
    <Wrapper>
      <Container onClick={navigateToHistory}>
        <Title>{t('plans.history')}</Title>
      </Container>
    </Wrapper>
  );
}
