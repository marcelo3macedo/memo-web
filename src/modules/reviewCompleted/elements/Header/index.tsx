import congrats from '@assets/banners/happyBoy.png';
import { useTranslation } from 'react-multi-lang';

import { Content, Image, SubTitle, Title, Wrapper } from './styles';

export default function Header({ session }: any) {
  const t = useTranslation();
  const subTitle = session;

  return (
    <Wrapper>
      <Content>
        <Title>{t('reviewCompleted.congrats')}</Title>
        <SubTitle>{subTitle}</SubTitle>
      </Content>
      <Image src={congrats} />
    </Wrapper>
  );
}
