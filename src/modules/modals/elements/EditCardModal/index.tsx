import React from 'react';
import { useTranslation } from 'react-multi-lang';
import { Formik, Form } from "formik";
import { useDispatch, useSelector } from 'react-redux';

import { SESSIONMODAL_EDITCARD } from '@constants/SessionModal';
import { FIELD_INPUT, FIELD_TEXTAREA } from '@constants/Field';
import ButtonPrimary from '@components/button/ButtonPrimary';
import IconSmall from '@components/icons/IconSmall';
import Field from '@modules/forms/elements/Field';
import { schema } from '@services/Validation/editCard.schema';
import { RootState } from '@store/modules/rootReducer';
import { closeAction } from '@store/mods/modals/actions';
import { editSubmit } from '@store/mods/cards/actions';

import { Wrapper, Content, Title, Header, Action } from './styles';

export default function EditCardModal() {
  const t = useTranslation()
  const dispatch = useDispatch()
  const { name: modalName } = useSelector((state:RootState) => state.modal)
  const { card } = useSelector((state:RootState) => state.cards)

  function closeClick() {
    dispatch(closeAction())
  }

  function submitAction(card) {
    dispatch(editSubmit({ card }))
  }

  if (!card) {
    return <></>;
  }
  
  return (
    <Wrapper show={modalName === SESSIONMODAL_EDITCARD}>
      <Content>
        <Header>
          <Title>{t('editCard.card')}</Title>
          <Action onClick={closeClick}>
            <IconSmall name="delete"/>
          </Action>          
        </Header>
        <Formik 
              enableReinitialize
              initialValues={card}
              onSubmit={submitAction}
              validationSchema={schema}>
          <Form>
            <Field type={FIELD_INPUT} name="title" title={t('editCard.inputs.title')} placeholder={t('newCard.header')} />
            <Field type={FIELD_TEXTAREA} name="content" title={t('editCard.inputs.content')} placeholder={t('newCard.content')} />
            <Field type={FIELD_TEXTAREA} name="secretContent" title={t('editCard.inputs.secret')} placeholder={t('newCard.secretContent')} /> 
            <Action>
              <ButtonPrimary type="submit" content={t('actions.save')}/>
            </Action>
          </Form>
        </Formik>        
      </Content>
    </Wrapper>
  );
}