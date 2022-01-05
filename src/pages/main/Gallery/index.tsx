import React, { useEffect } from 'react';
import { useTranslation } from 'react-multi-lang';

import HeaderPage from '@components/header/HeaderPage';
import { loadAction } from '@store/modules/gallery/actions';

import { Wrapper, Content } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store/modules/rootReducer';
import DecksAvailable from '@components/blocks/DecksAvailable';

export default function Gallery() {
  const dispatch = useDispatch();
  const t = useTranslation();
  const { decks } = useSelector((state:RootState) => state.gallery);

  useEffect(() => {
    dispatch(loadAction());    
  }, [dispatch]);

  return (
    <Wrapper>
      <Content>
        <HeaderPage title={t('gallery.title')} subTitle={t('gallery.subTitle')}></HeaderPage>
        <DecksAvailable decks={decks} />
     </Content>
    </Wrapper>
  ); 
}