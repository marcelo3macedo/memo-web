import Tutorial from '@assets/banners/tutorials.png';
import { DefaultDescription } from '@components/descriptions/default';
import { BannerImage } from '@components/elements/images/banner';
import { TopHeader } from '@components/header/top';
import { ContactHelp } from '@components/help/contact';
import { useTranslation } from 'react-i18next';

import { Content, Paragraph, Wrapper } from './styles';

export function Help() {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Content>
        <TopHeader title={t('help.title')} description={t('help.subTitle')} />
        <Paragraph>
          <DefaultDescription content={t('help.content')} />
        </Paragraph>
        <Paragraph>
          <DefaultDescription content={t('help.tutorials')} />
        </Paragraph>
        <Paragraph>
          <BannerImage source={Tutorial} />
        </Paragraph>
        <Paragraph>
          <DefaultDescription content={t('help.contact')} />
          <DefaultDescription content={t('help.thanks')} />
        </Paragraph>
        <Paragraph>
          <ContactHelp />
        </Paragraph>
      </Content>
    </Wrapper>
  );
}
