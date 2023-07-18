import { Styles } from '@interfaces/elements/inputs/ValueProps';
import styled from 'styled-components';

export const TextInput = styled.input<any>`
  ${({ theme, styleName }: any) => {
    switch (styleName) {
      case Styles.DarkBorder:
        return `          
            borderColor: ${theme.PALLETE01_COLOR};
            borderWidth: 2px;
            backgroundColor: ${theme.LIGHT_COLOR};
            paddingHorizontal: 20px;
            color: ${theme.PRIMARY_COLOR};
        `;
      case Styles.DarkSmallBorder:
        return `
            color: ${theme.PRIMARY_COLOR};
            borderColor: ${theme.PALLETE01_COLOR};
            borderWidth: 2px;
            backgroundColor: ${theme.LIGHT_COLOR};
            paddingHorizontal: 20px;
            paddingVertical: 10px;
        `;
      case Styles.NoBorder:
        return `
          background-color: ${theme.LIGHT_COLOR};
          color: ${theme.PRIMARY_COLOR};
          border-radius: 5px;
          min-width: 300px;
          padding: 15px;
          `;
      default:
        return `
          background-color: ${theme.LIGHT_COLOR};
          color: ${theme.PRIMARY_COLOR};
          border: 1px solid ${theme.GRAY_COLOR};
          border-radius: 5px;
          min-width: 300px;
          padding: 15px;
        `;
    }
  }}
`;
