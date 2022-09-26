import React from 'react';

import { FIELD_INPUT, FIELD_INPUT_HIDDEN } from '@constants/Field';
import IField from '@modules/forms/dtos/IField';
import InputArea from '../InputArea';
import ValidationMessage from '../ValidationMessage';
import InputTextArea from '../InputTextArea';

import { Wrapper, Content, Title } from './styles';

export default function Field({ type, name, placeholder, title }:IField) {
  function getByType(type) {
    switch (type) {
      case FIELD_INPUT: return (<InputArea name={name} placeholder={placeholder} theme="light"/>)
      case FIELD_INPUT_HIDDEN: return (<InputArea disabled={true} name={name} placeholder={placeholder} theme="light"/>)
      default: return (<InputTextArea name={name} placeholder={placeholder} theme="light"/>)
    }
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