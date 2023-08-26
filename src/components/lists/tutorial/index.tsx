import { FeaturedText } from '@components/elements/texts/featured';
import { SubtitleText } from '@components/elements/texts/subtitle';
import { RouteOptions } from '@interfaces/routes/SessionRoutesProps';
import { PATH_TUTORIALCARDS } from '@services/Navigation';
import { navigatePush } from '@store/modules/navigate/actions';
import { useDispatch } from 'react-redux';

import { Content } from './styles';

export function TutorialItem({ item }: any) {
  const dispatch = useDispatch();

  if (!item) {
    return <></>;
  }

  function goToItem() {
    dispatch(
      navigatePush({
        route: RouteOptions.account,
        path: PATH_TUTORIALCARDS
      })
    );
  }

  return (
    <Content
      onClick={() => {
        goToItem();
      }}>
      <SubtitleText value={item.title} />
      <FeaturedText value={item.description} />
    </Content>
  );
}
