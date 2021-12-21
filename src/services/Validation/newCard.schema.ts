import * as Yup from "yup";

export const initialValues = {
  title: "",
  content: "",
  secretContent: "",
};

export const schema = Yup.object().shape({
  content: Yup.string().required("Informe o Contéudo"),
  secretContent: Yup.string().required("Informe a Resposta"),
});
