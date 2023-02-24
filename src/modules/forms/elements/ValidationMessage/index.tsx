import React from 'react';
import { ErrorMessage } from "formik";

import { Wrapper, TextValue } from './styles';

export default function ValidationMessage({ name }:any) {
  const renderError = (message) => <TextValue>{message}</TextValue>;

  return (
    <Wrapper>
      <ErrorMessage name={name} render={renderError} />
    </Wrapper>
  );
}