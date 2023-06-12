import ButtonPrimary from '@components/button/ButtonPrimary';
import InputArea from '@components/input/InputArea';
import TextLinked from '@components/link/TextLinked';
import ValidationMessage from '@components/validation/ValidationMessage';
import { PATH_SIGN_IN } from '@services/Navigation';
import { schema, initialValues } from '@services/Validation/recover.schema';
import { forgotPasswordAction } from '@store/mods/auth/actions';
import { navigatePush } from '@store/mods/navigate/actions';
import { Formik, Form } from 'formik';
import React from 'react';
import { useTranslation } from 'react-multi-lang';
import { useDispatch } from 'react-redux';

import {
  Wrapper,
  Content,
  ActionArea,
  Fields,
  FormArea,
  InputText,
} from './styles';

export default function Recover() {
  const t = useTranslation();
  const dispatch = useDispatch();

  function signInClick() {
    dispatch(navigatePush({ path: PATH_SIGN_IN }));
  }

  function handleSubmit(data) {
    dispatch(forgotPasswordAction(data));
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
                <InputText>{t('recover.fields.mail')}</InputText>
                <InputArea
                  name='user'
                  placeholder={t('auth.mailPlaceholder')}
                />
                <ValidationMessage name='user' />
              </Fields>
              <ActionArea>
                <TextLinked
                  content={t('auth.goToLogin')}
                  action={signInClick}
                />
                <ButtonPrimary type='submit' content={t('auth.recover')} />
              </ActionArea>
            </FormArea>
          </Form>
        </Formik>
      </Content>
    </Wrapper>
  );
}
