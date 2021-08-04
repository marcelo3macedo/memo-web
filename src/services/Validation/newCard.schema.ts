import * as Yup from "yup";

export const initialValues = {
  content: "",
  secretContent: "",
};

export const schema = Yup.object().shape({
  content: Yup.string().required("Informe o nome do Contéudo"),
  secretContent: Yup.string().required("Informe o nome da Resposta"),
});
