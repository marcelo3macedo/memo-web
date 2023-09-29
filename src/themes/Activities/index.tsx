import { Content, Wrapper } from './styles';

export function ActivitiesTheme({ children }: any) {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
}
