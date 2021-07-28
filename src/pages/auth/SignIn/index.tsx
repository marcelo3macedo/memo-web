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
import { PATH_FORGOT_PASSWORD } from '@services/Navigation';
import { schema, initialValues } from '@services/Validation/signIn.schema';

export default function SignIn() {
  const t = useTranslation()
  const dispatch = useDispatch();

  function forgotPasswordClick() {
    dispatch(navigatePush({ path: PATH_FORGOT_PASSWORD }));
  }

  function handleSubmit() {

  }

  return (
    <Wrapper>
        <Content>
          <Title>{t('auth.loginTitle')}</Title>
            <Formik 
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={schema}>
            <Form>
              <Fields>
                <InputIcon name="user" icon="user" placeholder={t('auth.mailPlaceholder')}/>
                <ValidationMessage name="user" />

                <InputIcon name="password" icon="password" placeholder={t('auth.passwordPlaceholder')}/>
                <ValidationMessage name="password" />
              </Fields>
              <ActionArea>
                  <TextLinked content={t('auth.forgotPassword')} action={forgotPasswordClick}/>
                  <ButtonPrimary type="submit" content={t('auth.enter')}/>
              </ActionArea>
            </Form>
          </Formik>
        </Content>
    </Wrapper>
  ); 
}