import { Styles } from '@interfaces/texts/TextProps';
import styled from 'styled-components';

export const Text = styled.h5<any>`
  ${({ theme, styleName }: any) => {
    switch (styleName) {
      case Styles.Light:
        return `
          color: ${theme.LIGHT_COLOR};
          font-weight: normal;
        `;
      case Styles.Pallete01:
        return `
          color: ${theme.PALLETE01_COLOR};
          font-weight: normal;
        `;
      default:
        return '';
    }
  }}
`;
