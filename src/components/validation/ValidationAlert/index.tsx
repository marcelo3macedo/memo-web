import React from 'react';
import { useDispatch } from "react-redux";
import { useTranslation } from 'react-multi-lang';

import ButtonSecondary from '@components/button/ButtonSecondary';
import { closeAlertAction } from '@store/modules/auth/actions';

import { Wrapper, Content, Title, MessageArea, Message, Actions } from './styles';

export default function ValidationAlert() {  
  const t = useTranslation()
  const dispatch = useDispatch();
  const validation = null;//useSelector((state:RootState) => state.auth.validation);

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