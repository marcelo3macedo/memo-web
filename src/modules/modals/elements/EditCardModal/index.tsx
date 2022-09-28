import React from 'react';
import { useTranslation } from 'react-multi-lang';
import { Formik, Form } from "formik";

import ButtonPrimary from '@components/button/ButtonPrimary';
import IconSmall from '@components/icons/IconSmall';
import { schema } from '@services/Validation/editCard.schema';

import { Wrapper, Content, Title, Header, Action } from './styles';
import { FIELD_INPUT, FIELD_TEXTAREA } from '@constants/Field';
import Field from '@modules/forms/elements/Field';

export default function EditCardModal({ show, card, submitAction, closeAction }) {
  const t = useTranslation();
  
  return (
    <Wrapper show={show}>
      <Content>
        <Header>
          <Title>{t('editCard.card')}</Title>
          <Action onClick={closeAction}>
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