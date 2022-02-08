import * as Yup from "yup";

export const initialValues = {
  name: "",
  isPublic: "public",
  frequencyId: null,
  themeId: null
};

export const schema = Yup.object().shape({
  name: Yup.string().required("Informe o nome da Sessão"),
});
