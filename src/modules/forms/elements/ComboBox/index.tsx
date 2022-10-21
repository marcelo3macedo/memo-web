import React from 'react';

import { Wrapper, Content, Title } from './styles';
import { Field } from 'formik';
import IComboBox from '@modules/forms/dtos/IComboBox';

export default function ComboBox({ name, title, options }:IComboBox) {
  return (
    <Wrapper>
      <Content>
        <Title>{title}</Title>
        <Field name={name} as="select">
          {options ? options.map(f => (
            <option key={f.id} value={f.id}>{f.name}</option>  
          )) : null}
        </Field>
      </Content>
    </Wrapper>
  );
}