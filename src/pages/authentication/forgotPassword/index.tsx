import PrimaryButton from '@components/elements/buttons/Primary';
import InputText from '@components/elements/input/Text';
import { FormText } from '@components/elements/texts/form';
import LinkedText from '@components/elements/texts/linked';
import MessageValidation from '@components/validation/message';
import { RouteOptions } from '@interfaces/routes/SessionRoutesProps';
import { PATH_LOGIN } from '@services/Navigation';
import { initialValues, schema } from '@services/Validation/login.schema';
import { navigatePush } from '@store/modules/navigate/actions';
import { Form, Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { Content, Fields, Row, RowRight, Wrapper } from './styles';

export function ForgotPassword() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isLoading = false;

  function handleSubmit() {}

  function loginHandler() {
    dispatch(
      navigatePush({
        route: RouteOptions.auth,
        path: PATH_LOGIN
      })
    );
  }

  return (
    <Wrapper>
      <Content>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={schema}>
          <Form>
            <Fields>
              <Row>
                <FormText value={t('auth.email')} />
                <InputText
                  name="mail"
                  placeholder={t('auth.mailPlaceholder')}
                />
                <MessageValidation name="mail" />
              </Row>
              <RowRight>
                <LinkedText
                  content={t('auth.goToLogin')}
                  action={loginHandler}
                />
              </RowRight>
              <Row>
                <PrimaryButton
                  type="submit"
                  content={t('auth.recover')}
                  loading={isLoading}
                />
              </Row>
            </Fields>
          </Form>
        </Formik>
      </Content>
    </Wrapper>
  );
}
