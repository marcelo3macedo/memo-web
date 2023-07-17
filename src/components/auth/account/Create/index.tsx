import LinkedText from '@components/elements/texts/linked';
import { RouteOptions } from '@interfaces/routes/SessionRoutesProps';
import { PATH_SIGNUP } from '@services/Navigation';
import { navigatePush } from '@store/modules/navigate/actions';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { TextValue, Wrapper } from './styles';

export default function CreateAccount() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  function registerHandler() {
    dispatch(
      navigatePush({
        route: RouteOptions.auth,
        path: PATH_SIGNUP
      })
    );
  }

  return (
    <Wrapper>
      <TextValue>{t('auth.notRegistered')}</TextValue>
      <LinkedText content={t('auth.newAccount')} action={registerHandler} />
    </Wrapper>
  );
}
