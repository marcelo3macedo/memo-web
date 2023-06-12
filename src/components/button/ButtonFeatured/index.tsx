import IconSmall from '@components/icons/IconSmall';
import React from 'react';

import { Wrapper, TextValue, Loading } from './styles';

export default function ButtonFeatured({
  content,
  type = null,
  action = null,
  loading = false,
}) {
  if (loading) {
    return (
      <Loading>
        <Wrapper className='no-select'>
          <IconSmall name='loading' />
        </Wrapper>
      </Loading>
    );
  }

  return (
    <Wrapper type={type ?? 'button'} onClick={action} className='no-select'>
      <TextValue>{content}</TextValue>
    </Wrapper>
  );
}
