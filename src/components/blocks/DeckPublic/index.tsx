import React from 'react';
import { useDispatch } from "react-redux";

import { Wrapper, Content, Title, Opacity, Data, Category } from './styles';
import { openPublicAction } from '@store/modules/deck/actions';
import { randomBackground } from '@config/Backgrounds';

export default function DeckPublic({ data }) {
  const dispatch = useDispatch();
  const background = randomBackground();
  const categoryName = data.category ? data.category.name : null;
  
  function openDeckClick() {
    dispatch(openPublicAction({ deck: data }));
  }

  return (
    <Wrapper onClick={openDeckClick} className='no-select'>
      <Content background={background}>
        <Opacity></Opacity>
        <Data>
          <Category>{categoryName}</Category>
          <Title>{data.name}</Title>
        </Data>
      </Content>
    </Wrapper>
  );
}