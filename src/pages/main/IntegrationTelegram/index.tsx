import { INTEGRATIONS_TELEGRAM } from '@constants/Integrations';
import PageHeader from '@modules/headers/elements/PageHeader';
import AddTelegram from '@modules/integrations/elements/AddTelegram';
import InfoTelegram from '@modules/integrations/elements/InfoTelegram';
import ListTelegram from '@modules/integrations/elements/ListTelegram';
import { loadAction } from '@store/mods/integrations/actions';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-multi-lang';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Wrapper, Content } from './styles';

export default function IntegrationTelegram() {
  const t = useTranslation();
  const dispatch = useDispatch();
  const { id } = useParams() as any;

  useEffect(() => {
    dispatch(loadAction({ type: INTEGRATIONS_TELEGRAM }));
  }, [dispatch]);

  return (
    <Wrapper>
      <Content>
        <PageHeader
          title={t('integrations.telegram.title')}
          subTitle={t('integrations.telegram.subTitle')}
        />
        <InfoTelegram />
        <AddTelegram id={id} />
        <ListTelegram />
      </Content>
    </Wrapper>
  );
}
