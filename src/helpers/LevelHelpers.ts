import { COLOR_GREEN, COLOR_RED, COLOR_YELLOW } from '@constants/colors';
import { LEVEL_EASY, LEVEL_MEDIUM } from '@constants/levels';

const getColorByLevel = level => {
  return level == LEVEL_EASY
    ? COLOR_GREEN
    : level == LEVEL_MEDIUM
    ? COLOR_YELLOW
    : COLOR_RED;
};

export { getColorByLevel };
