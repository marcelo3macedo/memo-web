import React from 'react';
import { Field } from "formik";

import { Wrapper, Content } from './styles';

export default function InputArea({ name=null, disabled=false, placeholder=null, type="text", theme="default" }:any) {
  return (
    <Wrapper>
        <Content theme={theme}>
          <Field name={name} disabled={disabled} type={type} className="input" placeholder={placeholder} />
        </Content>
    </Wrapper>
  );
}