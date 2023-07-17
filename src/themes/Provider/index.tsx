import { store } from '@store/index';
import { theme as bigStyle } from '@styles/bigFont.style';
import { theme as darkStyle } from '@styles/dark.style';
import { theme as lightStyle } from '@styles/light.style';
import { theme as normalStyle } from '@styles/normalFont.style';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

let nightModeStore = (store.getState() as any).config?.nightMode;
let fontSizeStore = (store.getState() as any).config?.fontSize;

export default function GlobalTheme({ children }: any) {
  const [theme, setTheme] = useState({
    ...lightStyle,
    ...normalStyle
  });

  function getTheme() {
    const state = store.getState() as any;
    const nightMode = state.config.nightMode;
    const fontMode = state.config.fontSize;
    const colors = nightMode ? darkStyle : lightStyle;
    const fontSize = fontMode === 'normal' ? normalStyle : bigStyle;

    return {
      ...colors,
      ...fontSize
    };
  }

  store.subscribe(() => {
    const nightModeStoreLive = (store.getState() as any).config?.nightMode;
    const fontSizeLive = (store.getState() as any).config?.fontSize;

    if (
      nightModeStore !== nightModeStoreLive ||
      fontSizeStore !== fontSizeLive
    ) {
      const newTheme = getTheme();
      nightModeStore = nightModeStoreLive;
      fontSizeStore = fontSizeLive;
      setTheme(newTheme);
    }
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
