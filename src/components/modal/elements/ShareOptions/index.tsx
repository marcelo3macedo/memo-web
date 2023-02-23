import React, { useState } from 'react';
import { useTranslation } from 'react-multi-lang';
import { LinkedinShareButton, WhatsappShareButton, FacebookShareButton, TelegramShareButton, TwitterShareButton } from 'react-share';

import IconLarge from '@components/icons/IconLarge';
import { PATH_SESSIONPUBLIC } from '@services/Navigation';

import { Wrapper, Content, Title, Options, Option } from './styles';

export default function ShareOptions({ session }:any) {
  const t = useTranslation()
  const url = `${process.env.REACT_APP_URL}${PATH_SESSIONPUBLIC}/${session.path || session.id}`
  const title = session.name

  console.log(url)

  return (
    <Wrapper>
      <Content>
        <Title>{t('share.description')}</Title>

        <Options>
          <Option>
            <LinkedinShareButton
              url={url}
              title={title}>
              <IconLarge name={'linkedin'} />        
            </LinkedinShareButton>
          </Option>
          <Option>
            <WhatsappShareButton
              url={url}
              title={title}>
              <IconLarge name={'whatsapp'} />         
            </WhatsappShareButton>
          </Option>
          <Option>
            <FacebookShareButton
              url={url}
              title={title}>
              <IconLarge name={'facebook'} />     
            </FacebookShareButton>
          </Option>
          <Option>
            <TelegramShareButton
              url={url}
              title={title}>
              <IconLarge name={'telegram'} />
            </TelegramShareButton>
          </Option>
          <Option>
            <TwitterShareButton
              url={url}
              title={title}>
              <IconLarge name={'twitter'} />        
            </TwitterShareButton>
          </Option>
        </Options>
      </Content>
    </Wrapper>
  );
}