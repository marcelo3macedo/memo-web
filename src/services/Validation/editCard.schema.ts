import * as Yup from "yup";

export const schema = Yup.object().shape({
  id: Yup.string(),
  content: Yup.string().required("Informe o Contéudo"),
  secretContent: Yup.string().required("Informe a Resposta"),
});
