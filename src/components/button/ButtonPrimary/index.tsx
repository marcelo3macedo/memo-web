import IconSmall from '@components/icons/IconSmall';

import { Loading, TextValue, Wrapper } from './styles';

export default function ButtonPrimary({
  content,
  type = null,
  action = null,
  loading = false,
  disabled = false,
}: any) {
  if (loading) {
    return (
      <Loading>
        <Wrapper type={type ?? 'button'} className='no-select'>
          <IconSmall name='loading' />
        </Wrapper>
      </Loading>
    );
  }

  return (
    <Wrapper
      type={type ?? 'button'}
      onClick={action}
      className='no-select'
      disabled={disabled}>
      <TextValue>{content}</TextValue>
    </Wrapper>
  );
}
