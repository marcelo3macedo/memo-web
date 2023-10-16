import SecondaryAnimatedButton from '@components/elements/buttons/SecondaryAnimated';
import { FeaturedText } from '@components/elements/texts/featured';
import { HeaderText } from '@components/elements/texts/header';
import { TitleText } from '@components/elements/texts/title';
import { AnimatedOptions } from '@components/options/Animated';
import { useTranslation } from 'react-i18next';

import { Content, Download, Option, Title, Wrapper } from './styles';

export function Back({ session }: any) {
  const { t } = useTranslation();
  const options = ['dislike', 'like', 'love'];

  if (!session) return <></>;

  return (
    <Wrapper>
      <Content>
        <Title>
          <TitleText value={session.answer} />
        </Title>
        <Option>
          <HeaderText value={t('review.opinion')} />
        </Option>
        <AnimatedOptions options={options} />
        <Download>
          <SecondaryAnimatedButton content={t('activities.actions.download')} />
        </Download>
        <FeaturedText value={t('review.yourChoose')} />
      </Content>
    </Wrapper>
  );
}
