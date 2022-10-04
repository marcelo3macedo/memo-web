import React from 'react';

import { Icons } from '@config/Icons';
import { Wrapper } from './styles';

const IconFull = ({ name, action=null, ...props }) => {
  let Icon = Icons[name];
  return  <Wrapper onClick={action}>
            <Icon {...props} />
          </Wrapper>;
};

export default IconFull;