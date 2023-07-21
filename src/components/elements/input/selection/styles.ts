import { Styles } from '@interfaces/elements/inputs/ValueProps';
import styled from 'styled-components';

export const Select = styled.select`
  ${({ theme, styleName }: any) => {
    switch (styleName) {
      case Styles.DarkBorder:
        return `          
          border: 2px solid ${theme.PALLETE01_COLOR};
          padding: 15px;
          color: ${theme.PRIMARY_COLOR};
          width: 100%;
          min-height: 50px;
        `;
      default:
        return `
          width: 100%;
          padding: 15px 10px;
          border-width: 2px;
          min-height: 50px;
          border-color: ${theme.PALLETE01_COLOR};
          resize: vertical;
        `;
    }
  }}
`;

export const Option = styled.option``;
