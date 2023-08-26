import { RouteOptions } from '@interfaces/routes/SessionRoutesProps';
import {
  PATH_CREATESESSION,
  PATH_GALLERY,
  PATH_PROGRESS,
  PATH_REVIEWPENDING,
  PATH_TUTORIAL
} from '@services/Navigation';
import { navigatePush } from '@store/modules/navigate/actions';
import { RootState } from '@store/modules/rootReducer';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { ItemMenu } from '../item';
import { ItemFeaturedMenu } from '../itemFeatured';

import { Content, Item, Wrapper } from './styles';

export function ActionsMenu() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { numberOfSessions } = useSelector(
    (state: RootState) => state.featuredUser
  );
  const sessionsToReview = `${t(
    'menu.options.sessionsToReview'
  )} (${numberOfSessions})`;

  function loadSessionToReview() {
    return numberOfSessions > 0 ? (
      <ItemFeaturedMenu
        title={sessionsToReview}
        action={() => {
          navigateTo(PATH_REVIEWPENDING, RouteOptions.review);
        }}
      />
    ) : (
      <ItemFeaturedMenu
        title={t('menu.options.checkTutorials')}
        action={() => {
          navigateTo(PATH_TUTORIAL, RouteOptions.account);
        }}
      />
    );
  }

  function navigateTo(screen: string, route: string = null) {
    dispatch(navigatePush({ route, path: screen }));
  }

  return (
    <Wrapper>
      <Content>
        <Item>{loadSessionToReview()}</Item>
        <Item>
          <ItemMenu
            title={t('menu.options.createNewSession')}
            action={() => {
              navigateTo(PATH_CREATESESSION, RouteOptions.session);
            }}
          />
        </Item>
        <Item>
          <ItemMenu
            title={t('menu.options.searchAtGallery')}
            action={() => {
              navigateTo(PATH_GALLERY);
            }}
          />
        </Item>
        <Item>
          <ItemMenu
            title={t('menu.options.viewMyProgress')}
            action={() => {
              navigateTo(PATH_PROGRESS, RouteOptions.account);
            }}
          />
        </Item>
      </Content>
    </Wrapper>
  );
}
