import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { RootState } from '@store/modules/rootReducer';
import InfoWithIcon from "@components/info/InfoWithIcon";

import { Wrapper, Content, Actions } from './styles';
import ButtonSecondary from '@components/button/ButtonSecondary';
import { navigatePush } from '@store/modules/navigate/actions';
import { PATH_HOME } from '@services/Navigation';

export default function SessionCompleted() {
  const dispatch = useDispatch();
  const { element, answered } = useSelector((state:RootState) => state.session);

  function backToHome() {
    dispatch(navigatePush({ path: PATH_HOME }));
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
        <Actions>
          <ButtonSecondary content="Voltar para Home" action={backToHome} />
        </Actions>
        <h1>Sessão completa</h1>

        {element.options.map(o => (
          <InfoWithIcon data={ generateInfoData(o) } />
        ))}
      </Content>
    </Wrapper>
  ); 
}