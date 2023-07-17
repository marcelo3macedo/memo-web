import HeaderPrimary from '@components/header/primary';

import { Content, Wrapper } from './styles';

export function MainTheme({ children }: any) {
  return (
    <Wrapper>
      <HeaderPrimary />
      <Content>{children}</Content>
    </Wrapper>
  );
}
