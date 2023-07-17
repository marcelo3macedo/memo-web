import { Styles } from '@interfaces/texts/TextProps';
import styled from 'styled-components';

export const Text = styled.h4<any>`
  ${({ theme, styleName }: any) => {
    switch (styleName) {
      case Styles.Light:
        return `
          color: ${theme.LIGHT_COLOR};
        `;
      case Styles.Pallete01:
        return `
          color: ${theme.PALLETE01_COLOR};
        `;
      case Styles.Pallete02:
        return `
          color: ${theme.PALLETE02_COLOR};
        `;
      default:
        return `
          color: ${theme.PRIMARY_COLOR};
        `;
    }
  }}
`;
