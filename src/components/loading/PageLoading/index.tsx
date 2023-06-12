import IconLarge from '@components/icons/IconLarge';
import { useTranslation } from 'react-multi-lang';

import { Content, Title, Wrapper } from './styles';

export default function PageLoading() {
  const t = useTranslation();

  return (
    <Wrapper>
      <Content>
        <IconLarge name={'loading'} />
        <Title>{t('loading.message')}</Title>
      </Content>
    </Wrapper>
  );
}
