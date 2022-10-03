import React from 'react';
import { useTranslation } from 'react-multi-lang';
import { useDispatch } from 'react-redux';

import ButtonSecondary from '@components/button/ButtonSecondary';
import { PATH_HOME } from '@services/Navigation';
import { navigatePush } from '@store/mods/navigate/actions';

import { Wrapper, Content, Title, SubTitle, HomeLink } from './styles';

export default function Validation() {
  const t = useTranslation();
  const dispatch = useDispatch();

  function homeClick() {
    dispatch(navigatePush({ path: PATH_HOME }));
  }

  return (
    <Wrapper>
        <Content>
          <Title>{t('auth.activateTitle')}</Title>
          <SubTitle>{t('auth.activateMail')}</SubTitle>

          <HomeLink>
            <ButtonSecondary content={t('auth.goToHome')} action={homeClick} />
          </HomeLink>
        </Content>
    </Wrapper>
  ); 
}