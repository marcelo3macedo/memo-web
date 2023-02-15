import React from 'react';

import { Wrapper, Picture } from './styles';

export default function PictureAction({ icon, action }) {
  return (
    <Wrapper onClick={action} className="no-select">
      <Picture src={icon} />
    </Wrapper>
  );
}