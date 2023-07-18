import { DefaultDescription } from '@components/descriptions/default';
import { TopHeader } from '@components/header/top';
import { useTranslation } from 'react-i18next';

import { Content, Infos, Wrapper } from './styles';

export function PrivacyPolicy() {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Content>
        <TopHeader
          title={t('privacyPolicy.title')}
          description={t('privacyPolicy.subTitle')}
        />
        <Infos>
          <DefaultDescription content={t('privacyPolicy.content')} />
        </Infos>
      </Content>
    </Wrapper>
  );
}
