import { Content } from './styles';

export function BaseList({ children }: any) {
  if (!children) {
    return <></>;
  }

  return <Content>{children}</Content>;
}
