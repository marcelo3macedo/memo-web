import React from 'react';
import { useDispatch } from "react-redux";
import { useTranslation } from 'react-multi-lang';
import { Formik, Form, Field } from "formik";

import ButtonPrimary from '@components/button/ButtonPrimary';
import ValidationMessage from '@components/validation/ValidationMessage';
import { initialValues, schema } from '@services/Validation/newDeck.schema';
import { saveAction } from '@store/modules/deck/actions';

import { Wrapper, Content, Title, Block } from './styles';

export default function AddDeck() {
  const dispatch = useDispatch();
  const t = useTranslation();

  function handleSubmit(data) {
    dispatch(saveAction(data));
  }

  return (
    <Wrapper>
      <Content>
        <Title>{t('newDeck.title')}</Title>
        <Formik 
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={schema}>
          <Form>
            <Block>
              <Field name={"name"} type="text" className="input" placeholder={t('newDeck.name')} />
              <ValidationMessage name="name"/>
              <ButtonPrimary type="submit" content={t('newDeck.save')}/>
            </Block>
          </Form>
        </Formik>
      </Content>
    </Wrapper>
  ); 
}