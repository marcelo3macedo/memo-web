import React, { useEffect } from 'react';
import { useTranslation } from 'react-multi-lang';
import { useDispatch, useSelector } from 'react-redux';

import IconSmall from '@components/icons/IconSmall';
import ButtonPrimary from '@components/button/ButtonPrimary';
import { RootState } from '@store/modules/rootReducer';
import { initAction } from '@store/modules/deck/edit/actions';
import { navigatePush } from '@store/mods/navigate/actions';
import { PATH_REVIEW } from '@services/Navigation';
import { editAction } from '@store/modules/personal/actions';
import { reviewAction } from '@store/modules/deck/actions';

import { Wrapper, Content, CloseArea, Body, Title, Description, Details, Status, StatusTitle, Actions, Action } from './styles';

export default function EditModal() {
  const t = useTranslation();
  const dispatch = useDispatch();
  const { show, target } = useSelector((state:RootState) => state.deckEdit);
  const statusTitle = target && target.isPublic ? t('session.public') : t('session.private');
  const frequencyName = target && target.frequency ? target.frequency.name : null;

  useEffect(() => {
    dispatch(initAction());
  }, [dispatch]);

  function closeClick() {
    dispatch(initAction());
  }

  function editClick() {
    dispatch(editAction({ deck: target }));
  }

  function reviewClick() {
    dispatch(reviewAction({ deck: target }));
    dispatch(navigatePush({ path: PATH_REVIEW }));
  }

  if (!target) {
    return <></>;
  }

  return (
    <Wrapper show={show}>
      <Content>
        <CloseArea className='remove-area' onClick={closeClick}>
          <IconSmall name="delete" />
        </CloseArea>
        <Body>
          <Title>{target.name}</Title>
          <Description>{target.description}</Description>
          <Details>
            <Status>
              <IconSmall name="visibility" />
              <StatusTitle>{statusTitle}</StatusTitle>
            </Status>
            <Status>
              <IconSmall name="repeat" />
              <StatusTitle>{frequencyName}</StatusTitle>
            </Status>
          </Details>
          <Actions>
            <Action className='edit' onClick={editClick}>
              <ButtonPrimary content={t('decks.actions.edit')}/>
            </Action>
            <Action className='review' onClick={reviewClick}>
              <ButtonPrimary content={t('decks.actions.review')}/>
            </Action>
          </Actions>
        </Body>
      </Content>
    </Wrapper>
  );
}