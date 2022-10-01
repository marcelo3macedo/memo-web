import React from 'react';
import { Form, Formik } from 'formik';
import { useTranslation } from 'react-multi-lang';
import { useDispatch, useSelector } from 'react-redux';

import RadioBox from '../RadioBox';
import ComboBox from '../ComboBox';
import Field from '../Field';
import { SESSIONS_PUBLIC } from '@constants/Sessions';
import { FIELD_INPUT, FIELD_TEXTAREA } from '@constants/Field';
import ButtonPrimary from '@components/button/ButtonPrimary';
import { initialValues, schema } from '@services/Validation/newSession.schema';
import { RootState } from '@store/modules/rootReducer';
import { addSubmit } from '@store/mods/decks/actions';

import { Wrapper, Content, Action } from './styles';
export default function CreateSessionForm() {
  const dispatch = useDispatch()
  const t = useTranslation()
  const { frequencies } = useSelector((state:RootState) => state.options)
  const visibilities = [ 
    { value: 'public', icon: 'unlock', title: t('privacy.public'), description: t('privacy.publicDescription') },
    { value: 'private', icon: 'lock', title: t('privacy.private'), description: t('privacy.privateDescription') }
  ]

  function handleSubmit(data) {
    const deck = {
      name: data.name,
      description: data.description,
      isPublic: data.isPublic === SESSIONS_PUBLIC,
      frequencyId: data.frequencyId
    }

    dispatch(addSubmit({ deck }))
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