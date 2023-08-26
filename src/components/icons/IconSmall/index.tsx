import { Icons } from '@config/Icons';

import { Wrapper } from './styles';

const IconSmall = ({ name, action = null, ...props }) => {
  const Icon = Icons[name];
  return (
    <Wrapper onClick={action}>
      <Icon {...props} />
    </Wrapper>
  );
};

export default IconSmall;
