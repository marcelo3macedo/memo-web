import { Field } from 'formik';

import { Content, Wrapper } from './styles';

export default function InputText({
  name = null,
  placeholder = null,
  type = 'text'
}) {
  return (
    <Wrapper>
      <Content>
        <Field
          name={name}
          type={type}
          className="input"
          placeholder={placeholder}
        />
      </Content>
    </Wrapper>
  );
}
