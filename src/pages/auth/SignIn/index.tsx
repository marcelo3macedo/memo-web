import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from 'react-multi-lang';
import { Formik, Form } from "formik";

import InputArea from '@components/input/InputArea';
import ButtonPrimary from '@components/button/ButtonPrimary';
import TextLinked from '@components/link/TextLinked';
import ValidationMessage from '@components/validation/ValidationMessage';
import { loadAction, signInAction } from '@store/modules/auth/actions';
import { navigatePush } from '@store/mods/navigate/actions';
import { RootState } from '@store/modules/rootReducer';
import { PATH_FORGOT_PASSWORD, PATH_SIGN_UP } from '@services/Navigation';
import { initialValues, schema } from '@services/Validation/signIn.schema';

import { Wrapper, Content, FormArea, ActionArea, Fields, NewUser, InputText, InfoText, InfoFeaturedText } from './styles';

export default function SignIn() {
  const t = useTranslation()
  const dispatch = useDispatch();
  const isLoading:any = useSelector((state:RootState) => state.auth.isLoading);

  useEffect(() => {
    dispatch(loadAction());    
  }, [dispatch]);
  
  function forgotPasswordClick() {
    dispatch(navigatePush({ path: PATH_FORGOT_PASSWORD }));
  }

  function signUpClick() {
    dispatch(navigatePush({ path: PATH_SIGN_UP }));
  }

  function handleSubmit(data) {
    dispatch(signInAction(data));
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
                <InputText>{t('auth.user')}</InputText>
                <InputArea name="user" placeholder={t('auth.mailPlaceholder')}/>
                <ValidationMessage name="user" />
                
                <InputText>{t('auth.password')}</InputText>
                <InputArea name="password" type="password" placeholder={t('auth.passwordPlaceholder')}/>
                <ValidationMessage name="password" />
              </Fields>
              <ActionArea>
                <TextLinked content={t('auth.forgotPassword')} action={forgotPasswordClick}/>
                <ButtonPrimary type="submit" content={t('auth.enter')} loading={isLoading}/>
              </ActionArea>
            </FormArea>
          </Form>
        </Formik>

          <NewUser>
              <InfoText>{t('auth.notRegistered')}</InfoText>
              <InfoFeaturedText onClick={signUpClick}>{t('auth.newAccount')}</InfoFeaturedText>
          </NewUser>
        </Content>
    </Wrapper>
  ); 
}