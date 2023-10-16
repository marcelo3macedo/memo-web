import { ButtonText } from '@components/elements/texts/button';
import IconSmall from '@components/icons/IconSmall';

import { Loading, Wrapper } from './styles';

export default function SecondaryAnimatedButton({
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
      <ButtonText value={content} />
    </Wrapper>
  );
}
