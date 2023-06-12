import { IOption } from '@interfaces/Option/option.interface';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding: 10px 5px;
`;

export const Content = styled.div<IOption>`
  background: ${props =>
    props.template ? 'var(--cold100)' : 'var(--secondaryDark)'};
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding: 25px 10px;

  svg {
    path {
      fill: var(--neutral0);
    }
  }
`;

export const Details = styled.div``;

export const Action = styled.div``;

export const Title = styled.h3`
  color: var(--neutral0);
  padding-top: 10px;
`;

export const SubTitle = styled.h4`
  color: var(--neutral0);
`;
