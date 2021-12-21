import React from 'react';
import { useDispatch } from "react-redux";

import banner from '@assets/banners/banner01.png';
import bannerDesktop from '@assets/banners/banner01Full.jpg';
import { Wrapper, Content, Banner, BannerArea } from './styles';
import { navigatePush } from '@store/modules/navigate/actions';
import { PATH_GALLERY } from '@services/Navigation';

export default function BannerGallery() {
  const dispatch = useDispatch();
  
  function navigate(path) {
    dispatch(navigatePush({ path: path }));
  }

  return (
    <Wrapper>
      <Content>
        <BannerArea onClick={() => { navigate(PATH_GALLERY) }}>
          <Banner className="mobile" src={banner}></Banner>
          <Banner className="desktop" src={bannerDesktop}></Banner>
        </BannerArea>
      </Content>
    </Wrapper>
  );
}