import React, { useState } from 'react';
import { useTranslation } from 'react-multi-lang';

import EditOption from '../EditOption';
import RemoveOption from '../RemoveOption';
import ButtonSecondary from '@components/button/ButtonSecondary';

import { Wrapper, Content, Options } from './styles';

export default function ExtraOptions({ id }:any) {
  const t = useTranslation()
  const [ menuShow, setMenuShow ] = useState(false)

  function changeMenu() {
    setMenuShow(!menuShow)
  }

  return (
    <Wrapper>
      <Content>
        <ButtonSecondary content={t('decks.actions.change')} action={changeMenu} />

        <Options show={menuShow}>
          <EditOption id={id} />
          <RemoveOption id={id} />          
        </Options>
      </Content>
    </Wrapper>
  );
}