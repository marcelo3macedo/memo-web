import React from 'react';
import { useDispatch } from "react-redux";
import { useTranslation } from 'react-multi-lang';
import { Formik, Form } from "formik";

import { Wrapper, Content, Title, ActionArea, Fields } from './styles';
import InputIcon from '@components/input/InputIcon';
import ButtonPrimary from '@components/button/ButtonPrimary';
import TextLinked from '@components/link/TextLinked';
import ValidationMessage from '@components/validation/ValidationMessage';

import { navigatePush } from '@store/modules/navigate/actions';
import { PATH_SIGN_IN } from '@services/Navigation';
import { schema, initialValues } from '@services/Validation/recover.schema';

export default function Recover() {
  const t = useTranslation()
  const dispatch = useDispatch();

  function signInClick() {
    dispatch(navigatePush({ path: PATH_SIGN_IN }));
  }

  function handleSubmit() {

  }

  return (
    <Wrapper>
        <Content>
          <Formik 
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={schema}>
            <Form>
              <Title>{t('auth.recoverTitle')}</Title>
              <Fields>
                <InputIcon name="user" icon="user" placeholder={t('auth.mailPlaceholder')}/>
                <ValidationMessage name="user" />
              </Fields>
              <ActionArea>
                  <TextLinked content={t('auth.goToLogin')} action={signInClick} />
                  <ButtonPrimary type="submit" content={t('auth.recover')} />
              </ActionArea>
            </Form>
          </Formik>
        </Content>
    </Wrapper>
  ); 
}