import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SquareAction from '@modules/actions/elements/SquareAction';
import { PATH_CREATESESSION, PATH_GALLERY } from '@services/Navigation';
import { navigatePush } from '@store/mods/navigate/actions';

import { Wrapper, Content } from './styles';
import { RootState } from '@store/modules/rootReducer';

export default function ActionsWelcome() {
  const dispatch = useDispatch()
  const user = useSelector((state:RootState) => state.auth.user)
  const { isPro } = user || {}

  function galleryAction() {
    dispatch(navigatePush({ path: PATH_GALLERY }))
  }

  function createAction() {
    dispatch(navigatePush({ path: PATH_CREATESESSION }))
  }

  return (
    <Wrapper>
      <Content>
         <SquareAction title={"Buscar"} subTitle={"na galeria"} icon={"gallery"} action={galleryAction} />
         { isPro ? <SquareAction title={"Criar"} subTitle={"nova sessão"} icon={"new"} template={"cold"} action={createAction} /> : <></> }
      </Content>
    </Wrapper>
  );
}