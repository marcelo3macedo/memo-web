import React from 'react';
import { useTranslation } from 'react-multi-lang';
import { Formik, Form } from "formik";
import { useDispatch, useSelector } from 'react-redux';

import { SESSIONMODAL_TITLEDECK } from '@constants/SessionModal';
import { FIELD_INPUT, FIELD_TEXTAREA } from '@constants/Field';
import ButtonPrimary from '@components/button/ButtonPrimary';
import IconSmall from '@components/icons/IconSmall';
import Field from '@modules/forms/elements/Field';
import { schema } from '@services/Validation/editDeck.schema';
import { RootState } from '@store/modules/rootReducer';
import { closeAction } from '@store/mods/modals/actions';
import { editSubmitAction } from '@store/mods/decks/actions';

import { Wrapper, Content, Title, Header, Action } from './styles';

export default function EditDeckModal() {
  const t = useTranslation()
  const dispatch = useDispatch()
  const { name: modalName } = useSelector((state:RootState) => state.modal)
  const { selected } = useSelector((state:RootState) => state.decks)

  function closeClick() {
    dispatch(closeAction())
  }

  function submitAction(deck) {
    dispatch(editSubmitAction({ deck }))
    dispatch(closeAction())
  }
  
  return (
    <Wrapper show={modalName === SESSIONMODAL_TITLEDECK}>
      <Content>
        <Header>
          <Title>{t('editDeck.title')}</Title>
          <Action onClick={closeClick}>
            <IconSmall name="delete"/>
          </Action>          
        </Header>        
        <Formik 
            enableReinitialize
            initialValues={selected}
            onSubmit={submitAction}
            validationSchema={schema}>
          <Form>
            <Field type={FIELD_INPUT} name="name" title={t('editDeck.name')} placeholder={t('editDeck.namePlaceholder')} />
            <Field type={FIELD_TEXTAREA} name="description" title={t('editDeck.description')} placeholder={t('editDeck.description')} />
            <Action>
              <ButtonPrimary type="submit" content={t('actions.save')}/>
            </Action>
          </Form>
        </Formik>        
      </Content>
    </Wrapper>
  );
}