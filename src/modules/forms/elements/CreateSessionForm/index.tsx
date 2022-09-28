import React from 'react';
import { Form, Formik } from 'formik';
import { useTranslation } from 'react-multi-lang';
import { useDispatch, useSelector } from 'react-redux';

import RadioBox from '../RadioBox';
import ComboBox from '../ComboBox';
import Field from '../Field';
import { FIELD_INPUT, FIELD_TEXTAREA } from '@constants/Field';
import ButtonPrimary from '@components/button/ButtonPrimary';
import { RootState } from '@store/modules/rootReducer';
import { saveAction } from '@store/modules/deck/actions';
import { initialValues, schema } from '@services/Validation/newSession.schema';

import { Wrapper, Content, Action } from './styles';

export default function CreateSessionForm() {
  const dispatch = useDispatch()
  const t = useTranslation()
  const { all:frequencies, default: defaultFrequency } = useSelector((state:RootState) => state.frequencies);
  initialValues.frequencyId = defaultFrequency ? defaultFrequency.id : null;
  const visibilities = [ 
    { value: 'public', icon: 'unlock', title: t('privacy.public'), description: t('privacy.publicDescription') },
    { value: 'private', icon: 'lock', title: t('privacy.private'), description: t('privacy.privateDescription') }
  ]

  function handleSubmit(data) {
    const payload = {
      name: data.name,
      description: data.description,
      isPublic: data.isPublic === "public",
      frequencyId: data.frequencyId
    };

    dispatch(saveAction(payload))
  }

  return (
    <Wrapper>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}>
          <Form>
            <Content>
              <Field type={FIELD_INPUT} name="name" title={t('newDeck.fields.name')} placeholder={t('newDeck.name')} />
              <Field type={FIELD_TEXTAREA} name="description" title={t('newDeck.fields.description')} placeholder={t('newDeck.description')} />
              <ComboBox name="frequencyId" options={frequencies} title={t('newDeck.interval')} />
              <RadioBox name="isPublic" options={visibilities}  />
            </Content>
            <Action>
              <ButtonPrimary type="submit" content={t('newDeck.save')}/>
            </Action>
          </Form>
      </Formik>
    </Wrapper>
  );
}