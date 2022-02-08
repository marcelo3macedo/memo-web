import React from 'react';
import { useTranslation } from 'react-multi-lang';
import { useDispatch, useSelector } from 'react-redux';

import { changeThemeId } from '@store/modules/deck/actions';
import { RootState } from '@store/modules/rootReducer';

import { Wrapper, Content, Title, Options, Option, Picture, Area } from './styles';

export default function Themes({ themes=[] }) {
  const t = useTranslation();
  const dispatch = useDispatch();
  const { themeId } = useSelector((state:RootState) => state.deck);

  function changeSelectedPicture(themeId) {
    dispatch(changeThemeId({ themeId }))
  }

  return (
    <Wrapper>
      <Content>
        <Title>{t('decks.theme')}</Title>

        <Area>
          <Options>
            {themes.map(t => (
              <Option key={t.id}>
                <Picture src={t.src} draggable="false" selected={t.id === themeId} onClick={() => { changeSelectedPicture(t.id) }} />
              </Option>
            ))}
          </Options>
        </Area>
      </Content>
    </Wrapper>
  );
}