import { HeaderText } from '@components/elements/texts/header';
import IconSmall from '@components/icons/IconSmall';
import { COLOR_GREEN, COLOR_YELLOW } from '@constants/colors';
import { Styles } from '@interfaces/texts/TextProps';

import { Loading, Green, Yellow, Red } from './styles';

export default function ColoredAnimatedButton({
  content,
  type = null,
  action = null,
  loading = false,
  disabled = false,
  color = COLOR_GREEN
}) {
  const Wrapper =
    color === COLOR_GREEN ? Green : color == COLOR_YELLOW ? Yellow : Red;

  if (loading) {
    return (
      <Loading>
        <Wrapper type={type ?? 'button'} className="no-select">
          <IconSmall name="loading" />
        </Wrapper>
      </Loading>
    );
  }

  return (
    <Wrapper
      type={type ?? 'button'}
      onClick={action}
      className="no-select"
      disabled={disabled}>
      <HeaderText value={content} styled={Styles.Light} />
    </Wrapper>
  );
}
