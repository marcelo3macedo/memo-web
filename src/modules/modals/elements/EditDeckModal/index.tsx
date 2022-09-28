import React from 'react';
import { useTranslation } from 'react-multi-lang';
import { Formik, Form } from "formik";

import { FIELD_INPUT, FIELD_TEXTAREA } from '@constants/Field';
import ButtonPrimary from '@components/button/ButtonPrimary';
import IconSmall from '@components/icons/IconSmall';
import Field from '@modules/forms/elements/Field';
import { schema } from '@services/Validation/editDeck.schema';

import { Wrapper, Content, Title, Header, Action } from './styles';

export default function EditDeckModal({ show, deck, submitAction, closeAction }) {
  const t = useTranslation();
  
  return (
    <Wrapper show={show}>
      <Content>
        <Header>
          <Title>{t('editDeck.title')}</Title>
          <Action onClick={closeAction}>
            <IconSmall name="delete"/>
          </Action>          
        </Header>        
        <Formik 
            enableReinitialize
            initialValues={deck}
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