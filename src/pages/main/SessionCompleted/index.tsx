import React from 'react';
import { useTranslation } from 'react-multi-lang';
import { useDispatch, useSelector } from "react-redux";

import { RootState } from '@store/modules/rootReducer';
import InfoWithIcon from "@components/info/InfoWithIcon";

import { Wrapper, Content, Actions, Resume, ResumeTitle } from './styles';
import ButtonSecondary from '@components/button/ButtonSecondary';
import { navigatePush } from '@store/modules/navigate/actions';
import { PATH_MAIN } from '@services/Navigation';
import HeaderPage from '@components/header/HeaderPage';

export default function SessionCompleted() {
  const dispatch = useDispatch();
  const t = useTranslation();
  const { element, answered } = useSelector((state:RootState) => state.session);

  function backToHome() {
    dispatch(navigatePush({ path: PATH_MAIN }));
  }

  function generateInfoData(option) {
    return {
      icon: "card",
      title: option.name,
      value: answered.filter(a => a.difficultyId === option.id).length
    }
  }

  return (
    <Wrapper>
      <Content> 
        <HeaderPage title={t('sessionCompleted.title')} subTitle={t('sessionCompleted.subTitle')}></HeaderPage>

        <Resume>
          <ResumeTitle>{t('sessionCompleted.resume')}</ResumeTitle>
          {element.options.map(o => (
            <InfoWithIcon key={o.id} data={ generateInfoData(o) } />
          ))}
        </Resume>

        <Actions>
          <ButtonSecondary content="Voltar para Home" action={backToHome} />
        </Actions>
      </Content>
    </Wrapper>
  ); 
}