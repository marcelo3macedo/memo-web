import React from 'react';

import Logo from "@assets/logo.png";

import { Wrapper, Image } from './styles';

const IconFeatured = ({ name, ...props }) => {
  return  <Wrapper>
            <Image src={Logo} />
          </Wrapper>;
};

export default IconFeatured;
