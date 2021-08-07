import React from 'react';
import { Field } from "formik";

import IconSmall from '@components/icons/IconSmall';
import { Wrapper, Content } from './styles';

export default function InputIcon({ icon, name=null, placeholder=null, type="text" }) {
  return (
    <Wrapper>
        <Content>
          <IconSmall name={icon} />
          <Field name={name} type={type} className="input" placeholder={placeholder} />
        </Content>
    </Wrapper>
  );
}