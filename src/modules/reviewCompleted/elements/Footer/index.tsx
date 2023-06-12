import ButtonPrimary from '@components/button/ButtonPrimary';
import { PATH_MAIN } from '@services/Navigation';
import { navigatePush } from '@store/mods/navigate/actions';
import React from 'react';
import { useTranslation } from 'react-multi-lang';
import { useDispatch } from 'react-redux';

import { Wrapper, Content, Title, Action } from './styles';

export default function Footer() {
  const t = useTranslation();
  const dispatch = useDispatch();

  function backToHome() {
    dispatch(navigatePush({ path: PATH_MAIN }));
  }

  return (
    <Wrapper>
      <Content>
        <Title>{t('reviewCompleted.check')}</Title>
        <Action>
          <ButtonPrimary
            content={t('reviewCompleted.back')}
            action={backToHome}
          />
        </Action>
      </Content>
    </Wrapper>
  );
}
