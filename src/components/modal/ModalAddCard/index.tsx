import ButtonPrimary from '@components/button/ButtonPrimary';
import IconSmall from '@components/icons/IconSmall';
import ValidationMessage from '@components/validation/ValidationMessage';
import { initialValues, schema } from '@services/Validation/newCard.schema';
import { Field, Form, Formik } from 'formik';
import { useTranslation } from 'react-multi-lang';

import { Block, Content, Fields, Header, Title, Wrapper } from './styles';

export default function ModalAddCard({ show, closeAction, submitAction }) {
  const t = useTranslation();

  return (
    <Wrapper show={show}>
      <Content>
        <Header onClick={closeAction}>
          <IconSmall name='delete' />
        </Header>
        <Title>{t('newCard.title')}</Title>
        <Formik
          enableReinitialize
          initialValues={initialValues}
          onSubmit={submitAction}
          validationSchema={schema}>
          <Form>
            <Block>
              <Fields>
                <Field
                  name={'title'}
                  type='text'
                  className='input'
                  placeholder={t('newCard.header')}
                />
                <ValidationMessage name='title' />
                <Field
                  name={'content'}
                  as='textarea'
                  type='text'
                  className='input'
                  placeholder={t('newCard.content')}
                />
                <ValidationMessage name='content' />
                <Field
                  name={'secretContent'}
                  as='textarea'
                  type='text'
                  className='input'
                  placeholder={t('newCard.secretContent')}
                />
                <ValidationMessage name='secretContent' />
              </Fields>
              <ButtonPrimary type='submit' content={t('actions.save')} />
            </Block>
          </Form>
        </Formik>
      </Content>
    </Wrapper>
  );
}
