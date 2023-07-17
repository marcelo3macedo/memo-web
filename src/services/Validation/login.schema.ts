import i18n from '@services/Translation';
import * as Yup from 'yup';

export const initialValues = {
  user: '',
  password: ''
};

export const schema = Yup.object().shape({
  user: Yup.string().required(i18n.t('validation.user.required')),
  password: Yup.string().required(i18n.t('validation.password.required'))
});
