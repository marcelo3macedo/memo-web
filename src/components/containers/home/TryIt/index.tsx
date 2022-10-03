import React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-multi-lang';

import ButtonPrimary from '@components/button/ButtonPrimary';
import { PATH_SIGN_IN } from '@services/Navigation';
import { navigatePush } from '@store/mods/navigate/actions';

import { Wrapper, Content, Group, Title, Actions } from './styles';

export default function TryIt() {
  const t = useTranslation();
  const dispatch = useDispatch();

  function signIn() {
    dispatch(navigatePush({ path: PATH_SIGN_IN }));
  }
  
  return (
    <Wrapper>
      <Content>
        <Group>
            {t('home.tryIt.title').split("|").map((v, index) =>(
              <Title key={index}>{v}</Title>
            ))}

            <Actions>
                <ButtonPrimary content={t('home.access')} action={signIn}></ButtonPrimary>
            </Actions>
        </Group>
      </Content>
    </Wrapper>
  );
}