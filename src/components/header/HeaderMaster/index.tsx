import React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-multi-lang';

import IconMedium from '@components/icons/IconMedium';
import logo from '@assets/logo.png';
import { navigatePush } from '@store/modules/navigate/actions';
import { PATH_ACCOUNT, PATH_GALLERY, PATH_MAIN, PATH_SESSIONS } from '@services/Navigation';

import { Wrapper, Content, Header, Logo, Options, Option, Menu, MenuItem, MenuContent } from './styles';

export default function HeaderMaster() {
  const t = useTranslation()
  const dispatch = useDispatch()

  function navigate(path) {
    dispatch(navigatePush({ path: path }));
  }

  return (
    <Wrapper>
      <Content>
        <Header>
          <Logo className="no-select" src={logo} onClick={() => { navigate(PATH_MAIN) } }></Logo>
          
          <Menu>
            <MenuItem onClick={() => { navigate(PATH_MAIN) } }>
              <MenuContent>{t('menu.home')}</MenuContent>
            </MenuItem>
            <MenuItem onClick={() => { navigate(PATH_SESSIONS) } }>
              <MenuContent>{t('menu.sessions')}</MenuContent>
            </MenuItem>
            <MenuItem onClick={() => { navigate(PATH_GALLERY) } }>
              <MenuContent>{t('menu.gallery')}</MenuContent>
            </MenuItem>
          </Menu>

          <Options>
            <Option onClick={() => { navigate(PATH_ACCOUNT) } }>
              <IconMedium name="user" />
            </Option>
            <Option>
              <IconMedium name="search" onClick={() => { navigate(PATH_GALLERY) } } />
            </Option>
          </Options>
        </Header>
      </Content>
    </Wrapper>
  );
}