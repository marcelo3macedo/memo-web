import IconSmall from '@components/icons/IconSmall';
import { useTheme } from 'styled-components';

import { Image, Loading, TextValue, Wrapper } from './styles';

export default function PrimaryIconedButton({
  content,
  icon,
  type = null,
  action = null,
  loading = false,
  disabled = false
}) {
  const theme = useTheme() as any;
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
      <TextValue>{content}</TextValue>
      <Image>
        <IconSmall name={icon} style={{ fill: theme.LIGHT_COLOR }} />
      </Image>
    </Wrapper>
  );
}
