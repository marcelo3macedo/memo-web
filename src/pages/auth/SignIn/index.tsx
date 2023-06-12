import ButtonPrimary from '@components/button/ButtonPrimary';
import ButtonSecondaryIconed from '@components/button/ButtonSecondaryIconed';
import InputArea from '@components/input/InputArea';
import TextLinked from '@components/link/TextLinked';
import ValidationMessage from '@components/validation/ValidationMessage';
import { PATH_FORGOT_PASSWORD, PATH_SIGN_UP } from '@services/Navigation';
import { initialValues, schema } from '@services/Validation/signIn.schema';
import { navigatePush } from '@store/mods/navigate/actions';
import { loadAction, signInAction } from '@store/modules/auth/actions';
import { RootState } from '@store/modules/rootReducer';
import { Form, Formik } from 'formik';
import { useEffect } from 'react';
import GoogleLogin from 'react-google-login';
import { useTranslation } from 'react-multi-lang';
import { useDispatch, useSelector } from 'react-redux';

import {
  ActionArea,
  Content,
  Fields,
  FormArea,
  InfoFeaturedText,
  InfoText,
  InputText,
  NewUser,
  Wrapper,
} from './styles';

export default function SignIn() {
  const t = useTranslation();
  const dispatch = useDispatch();
  const isLoading: any = useSelector(
    (state: RootState) => state.auth.isLoading
  );

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

  function handleGoogleLogin() {}

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
                <InputArea
                  name='user'
                  placeholder={t('auth.mailPlaceholder')}
                />
                <ValidationMessage name='user' />

                <InputText>{t('auth.password')}</InputText>
                <InputArea
                  name='password'
                  type='password'
                  placeholder={t('auth.passwordPlaceholder')}
                />
                <ValidationMessage name='password' />
              </Fields>
              <ActionArea>
                <TextLinked
                  content={t('auth.forgotPassword')}
                  action={forgotPasswordClick}
                />
                <ButtonPrimary
                  type='submit'
                  content={t('auth.enter')}
                  loading={isLoading}
                />
                <GoogleLogin
                  clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                  render={renderProps => (
                    <ButtonSecondaryIconed
                      icon='google'
                      content={t('auth.socialGoogle')}
                      action={renderProps.onClick}
                      loading={isLoading}
                    />
                  )}
                  onSuccess={handleGoogleLogin}
                  cookiePolicy={'single_host_origin'}
                />
              </ActionArea>
            </FormArea>
          </Form>
        </Formik>

        <NewUser>
          <InfoText>{t('auth.notRegistered')}</InfoText>
          <InfoFeaturedText onClick={signUpClick}>
            {t('auth.newAccount')}
          </InfoFeaturedText>
        </NewUser>
      </Content>
    </Wrapper>
  );
}
