  import React from 'react';
import { useTranslation } from 'react-multi-lang';
import { Formik, Form, Field } from "formik";

import ValidationMessage from '@components/validation/ValidationMessage';
import ButtonPrimary from '@components/button/ButtonPrimary';
import IconSmall from '@components/icons/IconSmall';
import { schema } from '@services/Validation/editDeck.schema';

import { Block, Fields, Wrapper, Content, Title, Header, FieldName } from './styles';

export default function ModalTitleDeck({ show, deck, submitAction, closeAction }) {
  const t = useTranslation();
  
  return (
    <Wrapper show={show}>
      <Content>
        <Header onClick={closeAction}>
          <IconSmall name="delete"/>
        </Header>
        <Title>{t('editDeck.title')}</Title>
        <Formik 
              enableReinitialize
              initialValues={deck}
              onSubmit={submitAction}
              validationSchema={schema}>
          <Form>
            <Block>
              <Fields>
                <FieldName>{t('editDeck.name')}</FieldName>
                <Field name={"name"} type="text" className="input" placeholder={t('editDeck.namePlaceholder')} />
                <ValidationMessage name="name"/>
              </Fields>
              <Fields>
                <FieldName>{t('editDeck.description')}</FieldName>
                <Field name={"description"} as="textarea" className="input" placeholder={t('editDeck.namePlaceholder')} />
                <ValidationMessage name="description"/>
              </Fields>
              <ButtonPrimary type="submit" content={t('actions.save')}/>
            </Block>
          </Form>
        </Formik>        
      </Content>
    </Wrapper>
  );
}