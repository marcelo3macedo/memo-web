import { IOptionEdit } from '@interfaces/Option/optionEdit.interface';
import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Content = styled.div``;

export const Options = styled.div<IOptionEdit>`
  display: ${props => (props.show ? 'block' : 'none')};
  border-top: 2px solid #ccc;
  padding: 20px;
  margin-top: 40px;
`;
