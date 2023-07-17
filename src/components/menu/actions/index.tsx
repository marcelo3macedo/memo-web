import { useTranslation } from 'react-i18next';

import { ItemMenu } from '../item';
import { ItemFeaturedMenu } from '../itemFeatured';

import { Content, Wrapper } from './styles';

export function ActionsMenu() {
  const { t } = useTranslation();
  const countSessions = 0;
  const sessionsToReview = `${t(
    'menu.options.sessionsToReview'
  )} (${countSessions})`;

  function loadSessionToReview() {
    return countSessions > 0 ? (
      <ItemFeaturedMenu title={sessionsToReview} />
    ) : (
      <ItemFeaturedMenu title={t('menu.options.checkTutorials')} />
    );
  }

  return (
    <Wrapper>
      <Content>
        {loadSessionToReview()}
        <ItemMenu title={t('menu.options.createNewSession')} />
        <ItemMenu title={t('menu.options.searchAtGallery')} />
        <ItemMenu title={t('menu.options.viewMyProgress')} />
      </Content>
    </Wrapper>
  );
}
