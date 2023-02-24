import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-multi-lang';

import ButtonPrimary from '@components/button/ButtonPrimary';
import { INTEGRATIONS_TELEGRAM } from '@constants/Integrations';
import { indexAction, updateAction } from '@store/mods/integrations/actions';
import { RootState } from '@store/modules/rootReducer';

import { Wrapper, Content, Title, SubTitle, Action} from './styles';

export default function AddTelegram({ id }:any) {
  const dispatch = useDispatch()
  const t = useTranslation()
  const { index } = useSelector((state:RootState) => state.integrations)
  
  useEffect(() => {
      if (id) {
        dispatch(indexAction({ type: INTEGRATIONS_TELEGRAM, id }))
      }
  }, [dispatch, id]);

  function addClick() {
    dispatch(updateAction({ type: INTEGRATIONS_TELEGRAM, id }))
  }

  if (!id || !index) return <></>
  
  return (
    <Wrapper>
      <Content>
        <Title>{t('integrations.telegram.addMessage')}</Title>
        <SubTitle>{index.externalName}</SubTitle>
        <Action>
          <ButtonPrimary content={t('integrations.telegram.add')} action={addClick} />
        </Action>
      </Content>
    </Wrapper>
  );
}