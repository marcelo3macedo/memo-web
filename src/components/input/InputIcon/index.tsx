import React from 'react';

import IconSmall from '@components/icons/IconSmall';
import { Wrapper, Content, InputBox } from './styles';

export default function InputIcon({ icon, placeholder=null }) {
  return (
    <Wrapper>
        <Content>
          <IconSmall name={icon} />
          <InputBox placeholder={placeholder} />
        </Content>
    </Wrapper>
  );
}