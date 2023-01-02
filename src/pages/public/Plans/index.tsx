import React, { useEffect } from 'react';
import { useTranslation } from 'react-multi-lang';
import { useDispatch } from 'react-redux';

import PageHeader from '@modules/headers/elements/PageHeader';
import PlansFeatures from '@modules/blocks/elements/PlansFeatures';
import PlansOptions from '@modules/blocks/elements/PlansOptions';
import PlanActive from '@modules/blocks/elements/PlanActive';
import PlanHistory from '@modules/blocks/elements/PlanHistory';
import { loadAction } from '@store/mods/plans/actions';

import { Wrapper, Content } from './styles';

export default function Plans() {
  const t = useTranslation()
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(loadAction())
  }, [dispatch])
  
  return (
    <Wrapper>
      <Content>
        <PageHeader title={t('plans.title')} subTitle={t('plans.subtitle')} />
        <PlanActive />
        <PlanHistory />
        <PlansFeatures />
        <PlansOptions />
      </Content>   
    </Wrapper>
  )
}