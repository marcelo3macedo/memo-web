import React from 'react';
import { useTranslation } from 'react-multi-lang';
import { useDispatch } from 'react-redux';

import Item from '@modules/tutorial/elements/Item';
import PageHeader from '@modules/headers/elements/PageHeader';
import { PATH_TUTORIAL_CARDS } from '@services/Navigation';
import { navigatePush } from '@store/mods/navigate/actions';

import { Wrapper, Content, Options } from './styles';

export default function Tutorial() {
  const t = useTranslation()
  const dispatch = useDispatch()

  function goToTutorialCards() {
    dispatch(navigatePush({ path: PATH_TUTORIAL_CARDS }))
  }

  return (
    <Wrapper>
      <Content>
        <PageHeader title={t('tutorial.title')} subTitle={t('tutorial.subtitle')} />

        <Options>
          <Item title={t('tutorial.review.title')} description={t('tutorial.review.description')} action={goToTutorialCards} />
        </Options>
      </Content>
    </Wrapper>
  ); 
}