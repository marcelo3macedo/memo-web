import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store/modules/rootReducer';

import SquareAction from '@modules/actions/elements/SquareAction';

import { Wrapper, Content } from './styles';
import { queryAction } from '@store/modules/gallery/actions';

export default function ActionsGallery() {
  const dispatch = useDispatch()
  const { categories } = useSelector((state:RootState) => state.gallery)

  function categoryAction(category) {
    dispatch(queryAction({ query: category }));
  }

  return (
    <Wrapper>
      <Content>
        {categories.map(d => (
          <SquareAction key={d.id} title={d.name} subTitle={""} icon={"gallery"} action={() => { categoryAction(d.name) }} />
        ))}
      </Content>
    </Wrapper>
  );
}