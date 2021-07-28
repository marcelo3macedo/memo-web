import React from 'react';
import { Field } from "formik";

import IconSmall from '@components/icons/IconSmall';
import { Wrapper, Content } from './styles';

export default function InputIcon({ icon, name=null, placeholder=null }) {
  return (
    <Wrapper>
        <Content>
          <IconSmall name={icon} />
          <Field name={name} type="text" className="input" placeholder={placeholder} />
        </Content>
    </Wrapper>
  );
}