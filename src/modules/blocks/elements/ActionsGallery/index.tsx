import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@store/modules/rootReducer';

import SquareAction from '@modules/actions/elements/SquareAction';

import { Wrapper, Content } from './styles';

export default function ActionsGallery() {
  const { categories } = useSelector((state:RootState) => state.gallery)

  function categoryAction() {
  }

  return (
    <Wrapper>
      <Content>
        {categories.map(d => (
          <SquareAction key={d.id} title={d.name} subTitle={"Categoria"} icon={"gallery"} action={categoryAction} />
        ))}
      </Content>
    </Wrapper>
  );
}