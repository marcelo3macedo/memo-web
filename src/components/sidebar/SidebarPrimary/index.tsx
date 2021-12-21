import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from 'react-multi-lang';

import IconMedium from '@components/icons/IconMedium';
import { RootState } from '@store/modules/rootReducer';
import { navigatePush } from '@store/modules/navigate/actions';
import { PATH_ACCOUNT, PATH_GALLERY, PATH_MAIN, PATH_MYDECKS, PATH_SEARCHDECK } from '@services/Navigation';

import { Wrapper, Content, Item, Title } from './styles';

export default function SidebarPrimary() {
  const dispatch = useDispatch();
  const t = useTranslation();
  const actualPath = useSelector((state:RootState) => state.navigate.actualPath);

  function navigateClick(path) {
    dispatch(navigatePush({ path }));
  }

  function isActive(path) {
    if (path === actualPath) {
      return "active"
    }
  }

  return (
    <Wrapper>
        <Content className="no-select">
          <Item onClick={() => { navigateClick(PATH_MAIN)} } className={isActive(PATH_MAIN)}>
            <IconMedium name="home" />
            <Title>{t('menu.home')}</Title>
          </Item>
          <Item onClick={() => { navigateClick(PATH_MYDECKS)} } className={isActive(PATH_MYDECKS)}>
            <IconMedium name="card" />
            <Title>{t('menu.sessions')}</Title>
          </Item>
          <Item onClick={() => { navigateClick(PATH_GALLERY)} }className={isActive(PATH_GALLERY)}>
            <IconMedium name="gallery" />
            <Title>{t('menu.gallery')}</Title>
          </Item>
          <Item onClick={() => { navigateClick(PATH_SEARCHDECK)} } className={isActive(PATH_SEARCHDECK)}>
            <IconMedium name="search" />
            <Title>{t('menu.search')}</Title>
          </Item>
          <Item onClick={() => { navigateClick(PATH_ACCOUNT)} } className={isActive(PATH_ACCOUNT)}>
            <IconMedium name="user" />
            <Title>{t('menu.account')}</Title>
          </Item>          
        </Content>
    </Wrapper>
  );
}