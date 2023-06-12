import SquareAction from '@modules/actions/elements/SquareAction';
import PageHeader from '@modules/headers/elements/PageHeader';
import { PATH_INTEGRATION_TELEGRAM } from '@services/Navigation';
import { navigatePush } from '@store/mods/navigate/actions';
import React from 'react';
import { useTranslation } from 'react-multi-lang';
import { useDispatch } from 'react-redux';

import { Wrapper, Content, Integrations } from './styles';

export default function Integration() {
  const t = useTranslation();
  const dispatch = useDispatch();

  function navigateToClick(destiny) {
    dispatch(navigatePush({ path: destiny }));
  }

  return (
    <Wrapper>
      <Content>
        <PageHeader
          title={t('integrations.title')}
          subTitle={t('integrations.subTitle')}
        />

        <Integrations>
          <SquareAction
            title={'Telegram'}
            subTitle={'ver meus usuários'}
            icon={'telegram'}
            action={() => {
              navigateToClick(PATH_INTEGRATION_TELEGRAM);
            }}
          />
        </Integrations>
      </Content>
    </Wrapper>
  );
}
