import ButtonSecondary from '@components/button/ButtonSecondary';
import { openAction } from '@store/mods/decks/actions';
import { closeAction } from '@store/mods/modals/actions';
import { useTranslation } from 'react-multi-lang';
import { useDispatch } from 'react-redux';

import { Action, Content, Title, Wrapper } from './styles';

export default function EditOption({ id }: any) {
  const t = useTranslation();
  const dispatch = useDispatch();

  function editAction() {
    dispatch(openAction({ id }));
    dispatch(closeAction());
  }

  return (
    <Wrapper>
      <Content>
        <Title>{t('decks.editMessage')}</Title>
        <Action className='review' onClick={editAction}>
          <ButtonSecondary content={t('decks.actions.edit')} />
        </Action>
      </Content>
    </Wrapper>
  );
}
