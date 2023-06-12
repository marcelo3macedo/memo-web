import ButtonPrimary from '@components/button/ButtonPrimary';
import { FIELD_INPUT, FIELD_INPUT_HIDDEN } from '@constants/Field';
import { initialValues, schema } from '@services/Validation/profile.schema';
import { updateProfile } from '@store/modules/profile/actions';
import { RootState } from '@store/modules/rootReducer';
import { Form, Formik } from 'formik';
import React from 'react';
import { useTranslation } from 'react-multi-lang';
import { useDispatch, useSelector } from 'react-redux';

import Field from '../Field';

import { Wrapper, Content, Action } from './styles';

export default function UpdateProfileForm() {
  const t = useTranslation();
  const dispatch = useDispatch();
  const { profile } = useSelector((state: RootState) => state.profile);
  const formValues = profile ? profile : initialValues;

  function handleSubmit({ name }) {
    dispatch(updateProfile({ name }));
  }

  return (
    <Wrapper>
      <Formik
        initialValues={formValues}
        onSubmit={handleSubmit}
        validationSchema={schema}>
        <Form>
          <Content>
            <Field
              type={FIELD_INPUT}
              name='name'
              title={t('newDeck.fields.name')}
              placeholder={t('profile.fields.name')}
            />
            <Field
              type={FIELD_INPUT}
              name='email'
              title={t('profile.fields.email')}
              placeholder={t('profile.fields.email')}
            />
            <Field
              type={FIELD_INPUT_HIDDEN}
              name='createdAt'
              title={t('profile.fields.createdAt')}
              placeholder={t('profile.fields.createdAt')}
            />
          </Content>
          <Action>
            <ButtonPrimary type='submit' content={t('actions.update')} />
          </Action>
        </Form>
      </Formik>
    </Wrapper>
  );
}
