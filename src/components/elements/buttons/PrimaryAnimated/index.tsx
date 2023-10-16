import { SubtitleText } from '@components/elements/texts/subtitle';
import IconSmall from '@components/icons/IconSmall';
import { Styles } from '@interfaces/texts/TextProps';

import { Loading, Wrapper } from './styles';

export default function PrimaryAnimatedButton({
  content,
  type = null,
  action = null,
  loading = false,
  disabled = false
}) {
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
      <SubtitleText value={content} styled={Styles.Light} />
    </Wrapper>
  );
}
