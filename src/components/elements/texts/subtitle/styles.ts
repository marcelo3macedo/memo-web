import { Styles } from '@interfaces/texts/TextProps';
import styled from 'styled-components';

export const Text = styled.h2<any>`
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
      case Styles.Neutral90:
        return `
          color: ${theme.SECONDARY_COLOR};
        `;
      default:
        return `
          color: ${theme.PRIMARY_COLOR};
        `;
    }
  }}
`;
