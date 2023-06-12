import {
  PATH_ABOUT,
  PATH_ACCOUNT,
  PATH_CREATESESSION,
  PATH_GALLERY,
  PATH_INTEGRATION,
  PATH_MAIN,
  PATH_PLANS,
  PATH_SESSIONS,
} from '@services/Navigation';
import { navigatePush } from '@store/mods/navigate/actions';
import { RootState } from '@store/modules/rootReducer';
import { useTranslation } from 'react-multi-lang';
import { useDispatch, useSelector } from 'react-redux';

import MenuSidebarOption from '../MenuSidebarOption';

import { Content, Wrapper } from './styles';

export default function MenuSidebarOptions() {
  const dispatch = useDispatch();
  const t = useTranslation();
  const { userRole: isPro } = useSelector((state: RootState) => state.users);

  function navigate(path) {
    dispatch(navigatePush({ path: path }));
  }

  return (
    <Wrapper>
      <Content>
        <MenuSidebarOption
          icon='home'
          content={t('menu.home')}
          action={() => {
            navigate(PATH_MAIN);
          }}
        />
        <MenuSidebarOption
          icon='card'
          content={t('menu.sessions')}
          action={() => {
            navigate(PATH_SESSIONS);
          }}
        />
        <MenuSidebarOption
          icon='gallery'
          content={t('menu.gallery')}
          action={() => {
            navigate(PATH_GALLERY);
          }}
        />
        <MenuSidebarOption
          icon='new'
          content={t('menu.new')}
          action={() => {
            navigate(PATH_CREATESESSION);
          }}
        />
        {isPro ? (
          <MenuSidebarOption
            icon='next'
            content={t('menu.integrations')}
            action={() => {
              navigate(PATH_INTEGRATION);
            }}
          />
        ) : (
          <></>
        )}
        <MenuSidebarOption
          icon='plans'
          content={t('menu.plans')}
          action={() => {
            navigate(PATH_PLANS);
          }}
        />
        <MenuSidebarOption
          icon='users'
          content={t('menu.account')}
          action={() => {
            navigate(PATH_ACCOUNT);
          }}
        />
        <MenuSidebarOption
          icon='info'
          content={t('menu.about')}
          action={() => {
            navigate(PATH_ABOUT);
          }}
        />
      </Content>
    </Wrapper>
  );
}
