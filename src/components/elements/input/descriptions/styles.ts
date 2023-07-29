import { Styles } from '@interfaces/elements/inputs/ValueProps';
import styled from 'styled-components';

export const TextInput = styled.textarea<any>`
  ${({ theme, styleName }: any) => {
    switch (styleName) {
      case Styles.DarkBorder:
        return `          
          border: 2px solid ${theme.PALLETE01_COLOR};
          background-color: ${theme.BACKGROUND_COLOR};
          padding: 15px;
          color: ${theme.PRIMARY_COLOR};
          width: 100%;
          min-height: 50px;
        `;
      case Styles.DarkSmallBorder:
        return `
            fontFamily: ${theme.FONT_FAMILY_BOLD};
            color: ${theme.PRIMARY_COLOR};
            borderColor: ${theme.PALLETE01_COLOR};
            borderWidth: 2px;
            backgroundColor: ${theme.BACKGROUND_COLOR};
            padding: 20px;
            textAlignVertical: top;
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
