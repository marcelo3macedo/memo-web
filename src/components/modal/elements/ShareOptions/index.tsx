import React, { useState } from 'react';
import { useTranslation } from 'react-multi-lang';
import { LinkedinShareButton, WhatsappShareButton, FacebookShareButton, TelegramShareButton, TwitterShareButton } from 'react-share';
import { useDispatch } from 'react-redux';

import IconLarge from '@components/icons/IconLarge';
import ButtonSecondary from '@components/button/ButtonSecondary';
import { PATH_SESSIONPUBLIC } from '@services/Navigation';
import { editSubmitAction } from '@store/mods/decks/actions';

import { Wrapper, Content, Title, Options, Option, Action } from './styles';

export default function ShareOptions({ session }:any) {
  const t = useTranslation()
  const dispatch = useDispatch()

  const { id, path, name, isPublic } = session || {}
  const url = `${process.env.REACT_APP_URL}${PATH_SESSIONPUBLIC}/${path || '_'}/${id}`
  const title = name

  if (!session) return <></>

  function makePublic() {
    const deck = Object.assign({}, session, { isPublic: true })
    dispatch(editSubmitAction({ deck }))    
  }

  return (
    <Wrapper>
      <Content>
        <Title>{t('share.description')}</Title>

        <Action show={!isPublic}>
          <ButtonSecondary content={t('share.changePublic')} action={makePublic} />
        </Action>

        <Action show={isPublic}>
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
        </Action>    
      </Content>
    </Wrapper>
  );
}