import React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-multi-lang';

import project1 from "@assets/banners/project1.png";

import ButtonPrimary from '@components/button/ButtonPrimary';
import { PATH_SIGN_IN } from '@services/Navigation';
import { navigatePush } from '@store/modules/navigate/actions';

import { Wrapper, Content, Group, Picture, Title, Info, SubTitle, Actions } from './styles';

export default function Highlight() {
  const t = useTranslation();
  const dispatch = useDispatch();

  function signIn() {
    dispatch(navigatePush({ path: PATH_SIGN_IN }));
  }
  
  return (
    <Wrapper>
      <Content>
        <Group>
            {t('home.block01.title').split("|").map((v, index) =>(
              <Title key={index}>{v}</Title>
            ))}

            <Info>              
                {t('home.block01.subTitle').split("|").map((v, index) =>(
                  <SubTitle key={index}>{v}</SubTitle>
                ))}
            </Info>

            <Actions>
                <ButtonPrimary content={t('home.access')} action={signIn}></ButtonPrimary>
            </Actions>
        </Group>
        <Group>
            <Picture src={project1} alt={t('application.name')}/>
        </Group>
      </Content>
    </Wrapper>
  );
}