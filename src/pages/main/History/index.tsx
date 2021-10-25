import React, { useEffect } from 'react';
import { useTranslation } from 'react-multi-lang';
import { useDispatch, useSelector } from 'react-redux';

import HeaderPage from '@components/header/HeaderPage';
import { loadHistory } from '@store/modules/history/actions';

import { Wrapper, Content } from './styles';
import { RootState } from '@store/modules/rootReducer';
import Histories from '@components/blocks/Histories';

export default function History() {
  const t = useTranslation();
  const dispatch = useDispatch();
  const { history } = useSelector((state:RootState) => state.history);

  useEffect(() => {
    dispatch(loadHistory());
  }, [dispatch]);
 
  return (
    <Wrapper>
      <Content>
        <HeaderPage title={t('history.title')} subTitle={t('history.subTitle')}></HeaderPage>     

        <Histories data={history} />
     </Content>
    </Wrapper>
  ); 
}