import React from 'react';
import { useDispatch } from 'react-redux';

import SquareAction from '@modules/actions/elements/SquareAction';
import { PATH_CREATESESSION, PATH_GALLERY } from '@services/Navigation';
import { navigatePush } from '@store/mods/navigate/actions';

import { Wrapper, Content } from './styles';

export default function ActionsWelcome() {
  const dispatch = useDispatch()

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
         <SquareAction title={"Criar"} subTitle={"nova sessão"} icon={"new"} template={"cold"} action={createAction} />
      </Content>
    </Wrapper>
  );
}