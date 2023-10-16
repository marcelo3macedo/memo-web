import * as Yup from 'yup';

export const initialValues = {
  name: ''
};

export const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatorio')
});
