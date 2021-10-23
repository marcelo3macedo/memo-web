import React, { useEffect } from 'react';
import { useTranslation } from 'react-multi-lang';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from "formik";
import { RootState } from '@store/modules/rootReducer';

import HeaderPage from '@components/header/HeaderPage';
import { initialValues, schema } from '@services/Validation/profile.schema';
import ValidationMessage from '@components/validation/ValidationMessage';
import ButtonPrimary from '@components/button/ButtonPrimary';
import { loadProfile, updateProfile } from '@store/modules/profile/actions';

import { Wrapper, Content, Block, Fields } from './styles';

export default function Profile() {
  const t = useTranslation();
  const dispatch = useDispatch();
  const { profile } = useSelector((state:RootState) => state.profile);

  useEffect(() => {
    dispatch(loadProfile());
  }, [dispatch]);

  function handleSubmit({ name }) {
    dispatch(updateProfile({ name }));
  }
  
  return (
    <Wrapper>
      <Content>
        <HeaderPage title={t('profile.title')} subTitle={t('profile.subTitle')}></HeaderPage>     

        <Formik 
              enableReinitialize
              initialValues={profile ? profile : initialValues}
              onSubmit={handleSubmit}
              validationSchema={schema}>
          <Form>
            <Block>
              <Fields>
                <Field name={"name"} type="text" className="input" placeholder={t('profile.fields.name')} />
                <ValidationMessage name="name"/>
                <Field name={"email"} disabled type="text" className="input" placeholder={t('profile.fields.email')} />
                <ValidationMessage name="email"/>
                <Field name={"createdAt"} disabled type="text" className="input" placeholder={t('profile.fields.createdAt')} />
                <ValidationMessage name="createdAt"/>
              </Fields>
              <ButtonPrimary type="submit" content={t('actions.update')}/>
            </Block>
          </Form>
        </Formik>
      </Content>
    </Wrapper>
  ); 
}