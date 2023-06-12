import ButtonPrimary from '@components/button/ButtonPrimary';
import InputArea from '@components/input/InputArea';
import ValidationMessage from '@components/validation/ValidationMessage';
import { initialValues, schema } from '@services/Validation/reset.schema';
import { newPasswordAction } from '@store/mods/auth/actions';
import { Form, Formik } from 'formik';
import React from 'react';
import { useTranslation } from 'react-multi-lang';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import {
  Wrapper,
  Content,
  Title,
  ActionArea,
  Fields,
  FormArea,
  InputText,
} from './styles';

export default function Reset() {
  const t = useTranslation();
  const dispatch = useDispatch();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const token = params.get('token');

  if (!token) return <></>;

  function handleSubmit(data) {
    dispatch(
      newPasswordAction({
        token,
        password: data.password,
      })
    );
  }

  return (
    <Wrapper>
      <Content>
        <Title>{t('auth.restorePassword')}</Title>
        <Fields>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={schema}>
            <Form>
              <FormArea>
                <Fields>
                  <InputText>{t('reset.fields.password')}</InputText>
                  <InputArea
                    name='password'
                    type='password'
                    placeholder={t('reset.fields.passwordPlaceholder')}
                  />
                  <ValidationMessage name='password' />

                  <InputText>{t('reset.fields.confirmPassword')}</InputText>
                  <InputArea
                    name='confirmPassword'
                    type='password'
                    placeholder={t('reset.fields.confirmPassword')}
                  />
                  <ValidationMessage name='confirmPassword' />
                </Fields>
                <ActionArea>
                  <ButtonPrimary type='submit' content={t('auth.recover')} />
                </ActionArea>
              </FormArea>
            </Form>
          </Formik>
        </Fields>
      </Content>
    </Wrapper>
  );
}
