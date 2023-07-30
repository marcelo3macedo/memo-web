import CreateAccount from '@components/auth/account/Create';
import PrimaryButton from '@components/elements/buttons/Primary';
import SecondaryButton from '@components/elements/buttons/Secondary';
import InputText from '@components/elements/input/Text';
import { FormText } from '@components/elements/texts/form';
import LinkedText from '@components/elements/texts/linked';
import MessageValidation from '@components/validation/message';
import { generateGuestEmail } from '@helpers/GuestHelper';
import { RouteOptions } from '@interfaces/routes/SessionRoutesProps';
import { PATH_FORGOTPASSWORD } from '@services/Navigation';
import { initialValues, schema } from '@services/Validation/login.schema';
import { signInAction, socialAction } from '@store/modules/auth/actions';
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

  function guestHandler() {
    const email = generateGuestEmail();
    const token = '';
    const givenName = t('auth.guest');

    dispatch(socialAction({ email, token, name: givenName }));
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
              <Row>
                <SecondaryButton
                  content={t('auth.guestSession')}
                  action={guestHandler}
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
