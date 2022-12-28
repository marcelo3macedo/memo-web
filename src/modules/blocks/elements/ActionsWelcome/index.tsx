import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-multi-lang';

import SquareAction from '@modules/actions/elements/SquareAction';
import { PATH_CREATESESSION, PATH_GALLERY } from '@services/Navigation';
import { navigatePush } from '@store/mods/navigate/actions';

import { Wrapper, Content } from './styles';
import { RootState } from '@store/modules/rootReducer';

export default function ActionsWelcome() {
  const dispatch = useDispatch()
  const t = useTranslation()
  const { userRole:isPro } = useSelector((state:RootState) => state.users)
  
  function galleryAction() {
    dispatch(navigatePush({ path: PATH_GALLERY }))
  }

  function createAction() {
    dispatch(navigatePush({ path: PATH_CREATESESSION }))
  }

  return (
    <Wrapper>
      <Content>
         <SquareAction title={t('options.search')} subTitle={t('options.inGallery')} icon={"gallery"} action={galleryAction} />
         { isPro ? <SquareAction title={t('options.create')} subTitle={t('options.newSession')} icon={"new"} template={"cold"} action={createAction} /> : <></> }
      </Content>
    </Wrapper>
  );
}