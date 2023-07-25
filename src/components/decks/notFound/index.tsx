import notFound from '@assets/notFound.png';
import { useTranslation } from 'react-multi-lang';

import { Content, Picture, Title, Wrapper } from './styles';

export default function NotFound() {
  const t = useTranslation();

  return (
    <Wrapper>
      <Content>
        <Picture src={notFound} />
        <Title>{t('notFound.deck')}</Title>
      </Content>
    </Wrapper>
  );
}
