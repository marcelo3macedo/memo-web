import HappyBoy from '@assets/banners/happyBoy.png';
import PrimaryButton from '@components/elements/buttons/Primary';
import { BannerImage } from '@components/elements/images/banner';
import { FeaturedText } from '@components/elements/texts/featured';
import { SubtitleText } from '@components/elements/texts/subtitle';
import { TitleText } from '@components/elements/texts/title';
import { ResultsReview } from '@components/reviews/results';
import { RouteOptions } from '@interfaces/routes/SessionRoutesProps';
import { PATH_HOME } from '@services/Navigation';
import { navigatePush } from '@store/modules/navigate/actions';
import { RootState } from '@store/modules/rootReducer';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { Content, Footer, Header, Image, Info, Wrapper } from './styles';

export function ReviewFinish() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { answered, options } = useSelector((state: RootState) => state.review);

  function backToHome() {
    dispatch(
      navigatePush({
        route: RouteOptions.home,
        path: PATH_HOME
      })
    );
  }

  return (
    <Wrapper>
      <Header>
        <TitleText value={t('reviewCompleted.congrats')} />
        <SubtitleText value={t('reviewCompleted.sessionFinished')} />
      </Header>
      <Content>
        <Image>
          <BannerImage source={HappyBoy} />
        </Image>
        <SubtitleText value={t('reviewCompleted.seeResults')} />
        <ResultsReview options={options} answered={answered} />
      </Content>
      <Footer>
        <Info>
          <FeaturedText value={t('reviewCompleted.moreInfo')} />
        </Info>
        <PrimaryButton
          content={t('reviewCompleted.backHome')}
          action={backToHome}
        />
      </Footer>
    </Wrapper>
  );
}
