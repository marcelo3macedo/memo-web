import React from 'react';

import { ReactComponent as UserIcon } from "@assets/icons/user.svg";
import { ReactComponent as PasswordIcon } from "@assets/icons/password.svg";
import { ReactComponent as HomeIcon } from "@assets/icons/home.svg";

import { Wrapper } from './styles';

const iconTypes = {
  user: UserIcon,
  password: PasswordIcon,
  home: HomeIcon
};

const IconMedium = ({ name, ...props }) => {
  let Icon = iconTypes[name];
  return  <Wrapper>
            <Icon {...props} />
          </Wrapper>;
};

export default IconMedium;
