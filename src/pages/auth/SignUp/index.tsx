import React from 'react';
import { useDispatch } from "react-redux";
import { useTranslation } from 'react-multi-lang';
import { Formik, Form } from "formik";

import { Wrapper, Content, Title, ActionArea, Fields } from './styles';
import InputIcon from '@components/input/InputIcon';
import ButtonPrimary from '@components/button/ButtonPrimary';
import TextLinked from '@components/link/TextLinked';
import { initialValues, schema } from '@services/Validation/signUp.schema';
import { PATH_SIGN_IN } from '@services/Navigation';

import { navigatePush } from '@store/modules/navigate/actions';

export default function SignUp() {
  const t = useTranslation();
  const dispatch = useDispatch();

  function signUpClick() {
    dispatch(navigatePush({ path: PATH_SIGN_IN }));
  }

  function handleSubmit() {

  }

  return (
    <Wrapper>
        <Content>
          <Title>{t('auth.registerTitle')}</Title>
          <Formik 
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={schema}>
            <Form>
              <Fields>
                <InputIcon name={"fullName"} icon="user" placeholder={t('auth.namePlaceholder')}/>
                <InputIcon name={"user"} icon="user" placeholder={t('auth.mailPlaceholder')}/>
                <InputIcon name={"password"} icon="password" placeholder={t('auth.passwordPlaceholder')}/>
                <InputIcon name={"confirmPassword"} icon="password" placeholder={t('auth.confirmpasswordPlaceholder')}/>
              </Fields>
              <ActionArea>
                  <TextLinked content={t('auth.haveAccount')} action={signUpClick} />
                  <ButtonPrimary type="submit" content={t('auth.signUp')} />
              </ActionArea>
            </Form>
          </Formik>
        </Content>
    </Wrapper>
  ); 
}