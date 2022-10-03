import React from 'react';
import { useTranslation } from 'react-multi-lang';
import { useDispatch, useSelector } from "react-redux";

import HeaderPage from '@components/header/HeaderPage';
import InfoWithIcon from "@components/info/InfoWithIcon";
import ButtonSecondary from '@components/button/ButtonSecondary';
import { PATH_MAIN } from '@services/Navigation';
import { RootState } from '@store/modules/rootReducer';
import { navigatePush } from '@store/mods/navigate/actions';

import { Wrapper, Content, Actions, Resume, ResumeTitle, ResumeItem } from './styles';

export default function SessionCompleted() {
  const dispatch = useDispatch();
  const t = useTranslation();
  const { options, answered } = useSelector((state:RootState) => state.review);
  
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
          <ResumeItem>
            {options.map(o => (
              <InfoWithIcon key={o.id} data={ generateInfoData(o) } />
            ))}
          </ResumeItem>
        </Resume>

        <Actions>
          <ButtonSecondary content="Voltar para Home" action={backToHome} />
        </Actions>
      </Content>
    </Wrapper>
  ); 
}