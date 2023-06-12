import { Field } from 'formik';

import { Content, Wrapper } from './styles';

export default function InputArea({
  name = null,
  placeholder = null,
  type = 'text',
  theme = 'default',
}: any) {
  return (
    <Wrapper>
      <Content theme={theme}>
        <Field
          name={name}
          type={type}
          className='input'
          placeholder={placeholder}
        />
      </Content>
    </Wrapper>
  );
}
