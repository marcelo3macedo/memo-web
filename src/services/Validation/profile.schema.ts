import * as Yup from "yup";

export const initialValues = {
  name: "",
  email: "",
  createdAt: "",
};

export const schema = Yup.object().shape({
  name: Yup.string().required("Informe o Contéudo"),
  email: Yup.string().required("Informe a Resposta"),
  createdAt: Yup.string().required("Informe a Resposta"),
});
