import { Field } from 'formik';
import React from 'react';

import { Wrapper, Content } from './styles';

export default function InputTextArea({
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
          as='textarea'
          type={type}
          className='input'
          placeholder={placeholder}
        />
      </Content>
    </Wrapper>
  );
}
