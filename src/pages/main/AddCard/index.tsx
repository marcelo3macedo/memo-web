import React from 'react';
import { useDispatch } from "react-redux";
import { useTranslation } from 'react-multi-lang';
import { Formik, Form, Field } from "formik";

import ButtonPrimary from '@components/button/ButtonPrimary';
import ValidationMessage from '@components/validation/ValidationMessage';
import { initialValues, schema } from '@services/Validation/newCard.schema';
import { saveAction } from '@store/modules/card/actions';

import { Wrapper, Content, Title, Block, Fields } from './styles';

export default function AddCard() {
  const dispatch = useDispatch();
  const t = useTranslation();

  function handleSubmit(data) {
    dispatch(saveAction(data));
  }

  return (
    <Wrapper>
      <Content>
        <Title>{t('newCard.title')}</Title>
        <Formik 
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={schema}>
          <Form>
            <Block>
              <Fields>
                <Field name={"content"} type="text" className="input" placeholder={t('newCard.content')} />
                <ValidationMessage name="content"/>
                <Field name={"secretContent"} type="text" className="input" placeholder={t('newCard.secretContent')} />
                <ValidationMessage name="secretContent"/>
              </Fields>
              <ButtonPrimary type="submit" content={t('newCard.save')}/>
            </Block>
          </Form>
        </Formik>
      </Content>
    </Wrapper>
  ); 
}