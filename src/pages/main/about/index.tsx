import { DefaultDescription } from '@components/descriptions/default';
import { TopHeader } from '@components/header/top';
import { useTranslation } from 'react-i18next';

import { Content, Infos, Wrapper } from './styles';

export function About() {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Content>
        <TopHeader title={t('about.title')} description={t('about.subTitle')} />
        <Infos>
          <DefaultDescription content={t('about.content')} />
        </Infos>
      </Content>
    </Wrapper>
  );
}
