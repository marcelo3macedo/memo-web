import React from 'react';
import { useTranslation } from 'react-multi-lang';
import { Formik, Form, Field } from "formik";

import ValidationMessage from '@components/validation/ValidationMessage';
import ButtonPrimary from '@components/button/ButtonPrimary';
import IconSmall from '@components/icons/IconSmall';
import { schema } from '@services/Validation/editCard.schema';

import { Block, Fields, Wrapper, Content, Title, Header } from './styles';

export default function ModalEditDeck({ show, card, submitAction, closeAction }) {
  const t = useTranslation();
  
  return (
    <Wrapper show={show}>
      <Content>
        <Header onClick={closeAction}>
          <IconSmall name="delete"/>
        </Header>
        <Title>{t('editCard.card')}</Title>
        <Formik 
              enableReinitialize
              initialValues={card}
              onSubmit={submitAction}
              validationSchema={schema}>
          <Form>
            <Block>
              <Fields>
                <Field name={"title"} type="text" className="input" placeholder={t('newCard.header')} />
                <ValidationMessage name="title"/>
                <Field name={"content"} as="textarea" type="text" className="input" placeholder={t('newCard.content')} />
                <ValidationMessage name="content"/>
                <Field name={"secretContent"} as="textarea" type="text" className="input" placeholder={t('newCard.secretContent')} />
                <ValidationMessage name="secretContent"/>   
              </Fields>
              <ButtonPrimary type="submit" content={t('actions.save')}/>
            </Block>
          </Form>
        </Formik>        
      </Content>
    </Wrapper>
  );
}