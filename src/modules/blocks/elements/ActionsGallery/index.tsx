import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store/modules/rootReducer';

import SquareAction from '@modules/actions/elements/SquareAction';

import { Wrapper, Content } from './styles';
import { queryCategoryAction } from '@store/mods/gallery/actions';

export default function ActionsGallery() {
  const dispatch = useDispatch()
  const { categories, category } = useSelector((state:RootState) => state.gallery)

  function categoryAction(selected) {
    dispatch(queryCategoryAction({ category: category === selected ? '' : selected }));
  }

  return (
    <Wrapper>
      <Content>
        {categories.map(d => (
          <SquareAction active={d.name === category} key={d.id} title={d.name} subTitle={""} icon={"gallery"} action={() => { categoryAction(d.name) }} />
        ))}
      </Content>
    </Wrapper>
  );
}