import React from 'react';

import { ReactComponent as UserIcon } from "@assets/icons/user.svg";
import { ReactComponent as PasswordIcon } from "@assets/icons/password.svg";

import { Wrapper } from './styles';

const iconTypes = {
  user: UserIcon,
  password: PasswordIcon,
};

const IconSmall = ({ name, ...props }) => {
  let Icon = iconTypes[name];
  return  <Wrapper>
            <Icon {...props} />
          </Wrapper>;
};

export default IconSmall;
