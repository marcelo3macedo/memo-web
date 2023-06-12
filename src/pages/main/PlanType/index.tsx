import PlanPayment from '@modules/blocks/elements/PlanPayment';
import PageHeader from '@modules/headers/elements/PageHeader';
import { indexAction } from '@store/mods/planOptions/actions';
import { RootState } from '@store/modules/rootReducer';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-multi-lang';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Wrapper, Content } from './styles';

export default function PlanType() {
  const t = useTranslation();
  const dispatch = useDispatch();
  const { type } = useParams() as any;
  const { option } = useSelector((state: RootState) => state.planOptions);

  const title = `${t('planOptions.title')} ${option?.name}`;
  const subtitle = getSubtitle(
    option?.period,
    t('planOptions.subtitle'),
    t('planOptions.subtitleSingle')
  );

  function getSubtitle(period, single, multiple) {
    return `${period} ${period && period > 1 ? single : multiple}`;
  }

  useEffect(() => {
    dispatch(indexAction({ name: type }));
  }, [dispatch, type]);

  if (!option) return <></>;

  return (
    <Wrapper>
      <Content>
        <PageHeader title={title} subTitle={subtitle} />
        <PlanPayment />
      </Content>
    </Wrapper>
  );
}
