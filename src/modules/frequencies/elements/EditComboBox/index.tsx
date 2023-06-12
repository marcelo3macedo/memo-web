import { editSubmitAction } from '@store/mods/decks/actions';
import { RootState } from '@store/modules/rootReducer';
import React from 'react';
import { useTranslation } from 'react-multi-lang';
import { useDispatch, useSelector } from 'react-redux';

import { Wrapper, Content, Title, Options } from './styles';

export default function EditComboBox({ deck }: any) {
  const t = useTranslation();
  const dispatch = useDispatch();
  const { frequencies } = useSelector((state: RootState) => state.options);

  function frequencyChanged(event) {
    const payload = {
      deck: Object.assign({}, deck),
    };

    payload.deck.frequencyId = event.target.value;
    dispatch(editSubmitAction(payload));
  }

  return (
    <Wrapper className='no-select'>
      <Content>
        <Title>{t('decks.frequencyReview')}</Title>
        <Options
          name={'frequencyId'}
          defaultValue={deck.frequencyId}
          onChange={frequencyChanged}>
          {frequencies ? (
            frequencies.map(f => (
              <option key={f.id} value={f.id}>
                {f.name}
              </option>
            ))
          ) : (
            <></>
          )}
        </Options>
      </Content>
    </Wrapper>
  );
}
