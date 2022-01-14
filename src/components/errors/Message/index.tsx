import React from 'react';
import { useTranslation } from 'react-multi-lang';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store/modules/rootReducer';
import { hideError } from '@store/modules/validation/actions';
import IconSmall from '@components/icons/IconSmall';

import { Wrapper, Content, Messages, MessageArea, MessageText } from './styles';

export default function Message() {
  const t = useTranslation();
  const dispatch = useDispatch();
  const { showModal } = useSelector((state:RootState) => state.validation);

  if (showModal) {
    setTimeout(() => {
      dispatch(hideError());
    }, 3000);
  }

  return (
    <Wrapper show={showModal}>
      <Content>
        <MessageArea>
          <IconSmall name="info" />
          <Messages>
            {t('errors.serverFail').split("|").map((v, index) =>(
              <MessageText key={index}>{v}</MessageText>
            ))}
          </Messages>
        </MessageArea>
      </Content>
    </Wrapper>
  );
}