import * as Yup from "yup";

export const initialValues = {
    fullName: "",
    user: "",
    password: "",
    confirmPassword: ""
};
  
export const schema = Yup.object().shape({
    fullName: Yup.string().required("O nome é obrigatorio"),
    user: Yup.string().required("O usuário é obrigatorio"),
    password: Yup.string().required("A senha é obrigatoria"),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], "Senhas não conferem").required("A confirmação senha é obrigatória")
});
