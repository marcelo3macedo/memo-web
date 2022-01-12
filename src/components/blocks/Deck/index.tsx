import React from 'react';
import { useDispatch } from "react-redux";

import { Wrapper, Content, Title,  FrequencyInfo, VisibilityInfo, FrequencyTitle, TitleInfo, Opacity, Data, Frequency } from './styles';
import { openAction } from '@store/modules/deck/actions';
import { randomBackground } from '@config/Backgrounds';
import { useTranslation } from 'react-multi-lang';
import IconSmall from '@components/icons/IconSmall';

export default function Deck({ data, sessionCards=null }) {
  const t = useTranslation();
  const dispatch = useDispatch();
  const background = randomBackground();
  
  function openDeckClick() {
    dispatch(openAction({ deck: data }));
  }

  if (!data) {
    return <></>;
  }

  return (
    <Wrapper onClick={openDeckClick}>
      <Content background={background}>
        <Opacity></Opacity>
        <Data>
          <VisibilityInfo>
            <IconSmall name={"privacy"}/>
            <TitleInfo>{data.isPublic ? t('session.public') : t('session.private')}</TitleInfo>
          </VisibilityInfo>
          <Title>{data.name}</Title>
          <FrequencyInfo>
            <FrequencyTitle>{t('session.frequency')}</FrequencyTitle>
            <Frequency>{data.frequency ? data.frequency.name : null}</Frequency>
          </FrequencyInfo>
        </Data>
      </Content>
    </Wrapper>
  );
}