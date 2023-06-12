import IconSmall from '@components/icons/IconSmall';

import { Content, Wrapper } from './styles';

export default function ModalClose({ action }: any) {
  return (
    <Wrapper onClick={action}>
      <Content>
        <IconSmall name='delete' />
      </Content>
    </Wrapper>
  );
}
