import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from 'react-multi-lang';
import { Formik, Form } from "formik";

import { Wrapper, Content, ActionArea, Fields, FormArea, InputText } from './styles';
import ButtonPrimary from '@components/button/ButtonPrimary';
import TextLinked from '@components/link/TextLinked';
import ValidationMessage from '@components/validation/ValidationMessage';
import { initialValues, schema } from '@services/Validation/signUp.schema';
import { PATH_SIGN_IN } from '@services/Navigation';
import { navigatePush } from '@store/modules/navigate/actions';
import { signUpAction } from '@store/modules/auth/actions';
import { RootState } from '@store/modules/rootReducer';
import InputArea from '@components/input/InputArea';

export default function SignUp() {
  const t = useTranslation();
  const dispatch = useDispatch();
  const isLoading:any = useSelector((state:RootState) => state.auth.isLoading);

  function signUpClick() {
    dispatch(navigatePush({ path: PATH_SIGN_IN }));
  }

  function handleSubmit(data) {
    dispatch(signUpAction(data));
  }

  return (
    <Wrapper>
        <Content>
          <Formik 
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={schema}>
            <Form>
              <FormArea>
                <Fields>
                  <InputText>{t('register.fields.name')}</InputText>
                  <InputArea name={"fullName"} placeholder={t('auth.namePlaceholder')}/>
                  <ValidationMessage name="fullName" />

                  <InputText>{t('register.fields.mail')}</InputText>
                  <InputArea name={"user"} placeholder={t('auth.mailPlaceholder')}/>
                  <ValidationMessage name="user" />

                  <InputText>{t('register.fields.password')}</InputText>
                  <InputArea name={"password"} type="password" placeholder={t('auth.passwordPlaceholder')}/>
                  <ValidationMessage name="password" />

                  <InputText>{t('register.fields.confirmPassword')}</InputText>
                  <InputArea name={"confirmPassword"} type="password" placeholder={t('auth.confirmpasswordPlaceholder')}/>
                  <ValidationMessage name="confirmPassword" />
                </Fields>
                <ActionArea>
                    <TextLinked content={t('auth.haveAccount')} action={signUpClick} />
                    <ButtonPrimary type="submit" content={t('auth.signUp')} loading={isLoading} />
                </ActionArea>
              </FormArea>
            </Form>
          </Formik>
        </Content>
    </Wrapper>
  ); 
}