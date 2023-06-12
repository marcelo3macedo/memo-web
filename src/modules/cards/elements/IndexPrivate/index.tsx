import {
  SESSIONMODAL_EDITCARD,
  SESSIONMODAL_REMOVECARD,
} from '@constants/SessionModal';
import IIndexPrivateCard from '@modules/cards/dtos/IIndexPrivateCard';
import { editAction, removeAction } from '@store/mods/cards/actions';
import { openAction } from '@store/mods/modals/actions';
import React from 'react';
import { useTranslation } from 'react-multi-lang';
import { useDispatch } from 'react-redux';

import ActionBox from '../ActionBox';

import {
  Wrapper,
  Content,
  Card,
  Header,
  Title,
  Footer,
  Action,
  CardContent,
  SecretContent,
} from './styles';

export default function IndexPrivate({ card }: IIndexPrivateCard) {
  const t = useTranslation();
  const dispatch = useDispatch();

  function editClick() {
    dispatch(editAction({ card }));
    dispatch(openAction({ name: SESSIONMODAL_EDITCARD }));
  }

  function removeClick() {
    dispatch(removeAction({ card }));
    dispatch(openAction({ name: SESSIONMODAL_REMOVECARD }));
  }

  if (!card) {
    return <></>;
  }

  return (
    <Wrapper className='no-select'>
      <Content>
        <Card>
          <Header>
            <Title>{card.title}</Title>
          </Header>
          <Footer>
            <CardContent>{card.content}</CardContent>
            <SecretContent>{card.secretContent}</SecretContent>
          </Footer>
        </Card>
        <Action>
          <ActionBox action={editClick} title={t('decks.actions.edit')} />
          <ActionBox action={removeClick} title={t('decks.actions.remove')} />
        </Action>
      </Content>
    </Wrapper>
  );
}
