import { ConfirmRemove } from '@interfaces/Session/confirmRemove.interface';
import styled from 'styled-components';

export const Wrapper = styled.div<ConfirmRemove>`
  width: 100%;
  padding: 5px 0;
`;

export const Content = styled.div`
  display: flex;
  align-items: left;
`;

export const Status = styled.div`
  display: flex;
  align-items: center;
  min-width: 100px;

  svg {
    path {
      fill: var(--neutral80);
    }
  }
`;

export const Title = styled.h5`
  color: var(--neutral80);
  padding: 0 5px;
`;
