import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-multi-lang';
import { Formik, Form, Field } from "formik";

import { initialValues, schema } from '@services/Validation/newCard.schema';
import ValidationMessage from '@components/validation/ValidationMessage';
import ButtonPrimary from '@components/button/ButtonPrimary';
import IconSmall from '@components/icons/IconSmall';
import { openModalAction, saveAction } from '@store/modules/card/actions';
import { RootState } from '@store/modules/rootReducer';

import { Block, Fields, Wrapper, Content, Title, Header } from './styles';

export default function ModalAddCard() {
  const dispatch = useDispatch();
  const t = useTranslation();
  const modal = useSelector((state:RootState) => state.card.modal);
  const show = (modal === "add-card")

  function handleSubmit(data, { resetForm }) {
    dispatch(saveAction(data));
    resetForm();
  }

  function closeClick() {
    dispatch(openModalAction(null))
  }

  return (
    <Wrapper show={show}>
      <Content>
        <Header onClick={() => { closeClick() }}>
          <IconSmall name="delete"/>
        </Header>
        <Title>{t('newCard.title')}</Title>
        <Formik 
              enableReinitialize
              initialValues={initialValues}
              onSubmit={handleSubmit}
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