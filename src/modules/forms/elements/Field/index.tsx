import React from 'react';

import { FIELD_INPUT } from '@constants/Field';
import IField from '@modules/forms/dtos/IField';
import InputArea from '../InputArea';
import ValidationMessage from '../ValidationMessage';
import InputTextArea from '../InputTextArea';

import { Wrapper, Content, Title } from './styles';

export default function Field({ type, name, placeholder, title }:IField) {
  function getByType(type) {
    return type === FIELD_INPUT ? (<InputArea name={name} placeholder={placeholder} theme="light"/>) :
      (<InputTextArea name={name} placeholder={placeholder} theme="light"/>)
  }

  return (
    <Wrapper>
      <Content>
        <Title>{title}</Title>
        { getByType(type) }
        <ValidationMessage name={name}/>
      </Content>
    </Wrapper>
  );
}