import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-multi-lang';
import { Formik, Form, Field } from "formik";
import { initialValues, schema } from '@services/Validation/newCard.schema';
import ValidationMessage from '@components/validation/ValidationMessage';
import ButtonPrimary from '@components/button/ButtonPrimary';
import { RootState } from '@store/modules/rootReducer';

import { Block, Fields, Wrapper, Content, Title, Header } from './styles';
import IconSmall from '@components/icons/IconSmall';
import { closeCreateAction } from '@store/modules/card/actions';
import { saveAction } from '@store/modules/card/actions';

export default function ModalAddDeck() {
  const dispatch = useDispatch();
  const showCreator = useSelector((state:RootState) => state.card.showCreator);
  const t = useTranslation();

  function handleSubmit(data, { resetForm }) {
    dispatch(saveAction(data));
    resetForm();
  }

  function close() {
    dispatch(closeCreateAction());
  }

  return (
    <Wrapper show={showCreator}>
      <Content>
        <Header onClick={close}>
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