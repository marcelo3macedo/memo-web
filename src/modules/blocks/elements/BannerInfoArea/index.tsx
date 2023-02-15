import React from 'react';
import { useDispatch } from 'react-redux';

import doubts from '@assets/banners/doubts.png';
import moreInfo from '@assets/banners/more-info.png';
import { PATH_ABOUT, PATH_HELP } from '@services/Navigation';
import { navigatePush } from '@store/mods/navigate/actions';

import { Wrapper, Content, Picture, Info } from './styles';

export default function BannerInfoArea() {
  const dispatch = useDispatch()

  function helpAction() {
    dispatch(navigatePush({ path: PATH_HELP }))
  }

  function aboutAction() {
    dispatch(navigatePush({ path: PATH_ABOUT }))
  }

  return (
    <Wrapper>
      <Content>
        <Info onClick={helpAction}>
          <Picture src={doubts} />
        </Info>
        <Info onClick={aboutAction}>
          <Picture src={moreInfo} />
        </Info>
      </Content>
    </Wrapper>
  );
}