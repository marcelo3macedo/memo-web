import * as Yup from "yup";

export const initialValues = {
  password: "",
  confirmPassword: ""
};

export const schema = Yup.object().shape({
  password: Yup.string().required("A senha é obrigatoria"),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], "Senhas não conferem").required("A confirmação senha é obrigatória")
});
