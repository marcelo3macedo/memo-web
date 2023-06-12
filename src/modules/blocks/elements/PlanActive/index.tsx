import { formatTimeAsString } from '@helpers/DateHelper';
import { RootState } from '@store/modules/rootReducer';
import React from 'react';
import { useTranslation } from 'react-multi-lang';
import { useSelector } from 'react-redux';

import {
  Wrapper,
  Container,
  Title,
  Details,
  Description,
  Info,
} from './styles';

export default function PlanActive() {
  const t = useTranslation();
  const { userRole } = useSelector((state: RootState) => state.users);
  const planTitle = userRole ? t('plans.type.pro') : t('plans.type.standard');
  const planExpiresAt =
    userRole && userRole.expiresAt
      ? `${t('plans.details.expiresAt')} ${formatTimeAsString(
          userRole.expiresAt
        )}`
      : null;

  return (
    <Wrapper>
      <Container>
        <Title>{t('plans.details.title')}</Title>
        <Details>
          <Info>{planTitle}</Info>
          {planExpiresAt ? <Description>{planExpiresAt}</Description> : <></>}
        </Details>
      </Container>
    </Wrapper>
  );
}
