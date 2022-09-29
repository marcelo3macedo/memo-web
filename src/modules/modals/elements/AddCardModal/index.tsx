import React from 'react';
import { useTranslation } from 'react-multi-lang';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from "formik";

import { SESSIONMODAL_ADDCARD } from '@constants/SessionModal';
import { FIELD_INPUT, FIELD_TEXTAREA } from '@constants/Field';
import ButtonPrimary from '@components/button/ButtonPrimary';
import IconSmall from '@components/icons/IconSmall';
import Field from '@modules/forms/elements/Field';
import { initialValues, schema } from '@services/Validation/newCard.schema';
import { RootState } from '@store/modules/rootReducer';
import { closeAction } from '@store/mods/modals/actions';
import { addSubmit } from '@store/mods/cards/actions';

import { Wrapper, Content, Title, Header, Action } from './styles';

export default function AddCardModal({ deckId }) {
  const t = useTranslation()
  const dispatch = useDispatch()
  const { name: modalName } = useSelector((state:RootState) => state.modal)
  
  function closeClick() {
    dispatch(closeAction())
  }

  function submitAction(card) {
    dispatch(addSubmit({ deckId, card }))
  }
  
  return (
    <Wrapper show={modalName === SESSIONMODAL_ADDCARD}>
      <Content>
        <Header>
          <Title>{t('newCard.title')}</Title>
          <Action onClick={closeClick}>
            <IconSmall name="delete"/>
          </Action>          
        </Header>    
        <Formik 
              enableReinitialize
              initialValues={initialValues}
              onSubmit={submitAction}
              validationSchema={schema}>
          <Form>
            <Field type={FIELD_INPUT} name="title" title={t('newCard.inputs.title')} placeholder={t('newCard.header')} />
            <Field type={FIELD_TEXTAREA} name="content" title={t('newCard.inputs.content')} placeholder={t('newCard.content')} />
            <Field type={FIELD_TEXTAREA} name="secretContent" title={t('newCard.inputs.secret')} placeholder={t('newCard.secretContent')} />
            <Action>
              <ButtonPrimary type="submit" content={t('actions.save')}/>
            </Action>
          </Form>
        </Formik>        
      </Content>
    </Wrapper>
  );
}