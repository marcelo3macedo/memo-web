import { Styles } from '@interfaces/texts/TextProps';
import styled from 'styled-components';

export const Text = styled.h3<any>`
  ${({ theme, styleName }: any) => {
    switch (styleName) {
      case Styles.Light:
        return `
          color: ${theme.LIGHT_COLOR};
        `;
      default:
        return `
          color: ${theme.PRIMARY_COLOR};
        `;
    }
  }}
`;
