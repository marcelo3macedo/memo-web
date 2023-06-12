import { removeSubmitAction } from '@store/mods/decks/actions';
import { closeAction } from '@store/mods/modals/actions';
import { useTranslation } from 'react-multi-lang';
import { useDispatch } from 'react-redux';

import { Action, ActionTitle, Content, Title, Wrapper } from './styles';

export default function RemoveOption({ id }: any) {
  const t = useTranslation();
  const dispatch = useDispatch();

  function removeClick() {
    dispatch(removeSubmitAction({ id }));
    dispatch(closeAction());
  }

  return (
    <Wrapper>
      <Content>
        <Title>{t('decks.removeMessage')}</Title>
        <Action onClick={removeClick}>
          <ActionTitle>{t('decks.actions.permanentRemove')}</ActionTitle>
        </Action>
      </Content>
    </Wrapper>
  );
}
