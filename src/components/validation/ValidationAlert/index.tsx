import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from 'react-multi-lang';

import { RootState } from '@store/modules/rootReducer';

import { Wrapper, Content, Title, MessageArea, Message, Actions } from './styles';
import ButtonSecondary from '@components/button/ButtonSecondary';
import { closeAlertAction } from '@store/modules/auth/actions';

export default function ValidationAlert() {  
  const t = useTranslation()
  const dispatch = useDispatch();
  const validation = useSelector((state:RootState) => state.auth.validation);

  function closeAlert() {
    dispatch(closeAlertAction());
  }

  return (
    <Wrapper show={validation && validation.visible}> 
      <Content>
        <Title>{t('alert.title')}</Title>
        <MessageArea>
          <Message>{validation && validation.type ? t(validation.type) : null}</Message>
          <Message>{t('auth.tryAgain')}</Message>
        </MessageArea>
        <Actions>
          <ButtonSecondary content="Ok" action={closeAlert} />
        </Actions>
      </Content>
    </Wrapper>
  );
}