import CreateAccount from '@components/auth/account/Create';
import PrimaryButton from '@components/elements/buttons/Primary';
import InputText from '@components/elements/input/Text';
import { FormText } from '@components/elements/texts/form';
import LinkedText from '@components/elements/texts/linked';
import MessageValidation from '@components/validation/message';
import { RouteOptions } from '@interfaces/routes/SessionRoutesProps';
import { PATH_FORGOTPASSWORD } from '@services/Navigation';
import { initialValues, schema } from '@services/Validation/login.schema';
import { signInAction } from '@store/modules/auth/actions';
import { navigatePush } from '@store/modules/navigate/actions';
import { Form, Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { Content, Fields, Row, RowRight, Wrapper } from './styles';

export function Login() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isLoading = false;

  function handleSubmit(data: any) {
    dispatch(signInAction(data));
  }

  function forgotPasswordHandler() {
    dispatch(
      navigatePush({
        route: RouteOptions.auth,
        path: PATH_FORGOTPASSWORD
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
                <FormText value={t('auth.user')} />
                <InputText
                  name="user"
                  placeholder={t('auth.mailPlaceholder')}
                />
                <MessageValidation name="user" />
              </Row>
              <Row>
                <FormText value={t('auth.password')} />
                <InputText
                  name="password"
                  type="password"
                  placeholder={t('auth.passwordPlaceholder')}
                />
                <MessageValidation name="password" />
              </Row>
              <RowRight>
                <LinkedText
                  content={t('auth.forgotPassword')}
                  action={forgotPasswordHandler}
                />
              </RowRight>
              <Row>
                <PrimaryButton
                  type="submit"
                  content={t('auth.enter')}
                  loading={isLoading}
                />
              </Row>
              <CreateAccount />
            </Fields>
          </Form>
        </Formik>
      </Content>
    </Wrapper>
  );
}
