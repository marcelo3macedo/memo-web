import React from 'react';

import IconSmall from '@components/icons/IconSmall';
import { Wrapper, Content, InputBox } from './styles';

export default function InputIcon({ icon }) {
  return (
    <Wrapper>
        <Content>
          <IconSmall name={icon} />
          <InputBox />
        </Content>
    </Wrapper>
  );
}