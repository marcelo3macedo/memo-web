import IconSmall from '@components/icons/IconSmall';

import { Loading, TextValue, Wrapper } from './styles';

export default function ButtonSecondary({
  content,
  action = null,
  loading = false,
}: any) {
  if (loading) {
    return (
      <Loading>
        <Wrapper className='no-select'>
          <IconSmall name='loading' />
        </Wrapper>
      </Loading>
    );
  }

  return (
    <Wrapper onClick={action} className='no-select'>
      <TextValue>{content}</TextValue>
    </Wrapper>
  );
}
