import Logo from '@assets/logo.png';
import React from 'react';

import { Wrapper, Image } from './styles';

const IconFeatured = ({ name, ...props }) => {
  return (
    <Wrapper>
      <Image src={Logo} />
    </Wrapper>
  );
};

export default IconFeatured;
