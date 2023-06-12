import ButtonSecondary from '@components/button/ButtonSecondary';
import IconLarge from '@components/icons/IconLarge';
import { PATH_SESSIONPUBLIC } from '@services/Navigation';
import { editSubmitAction } from '@store/mods/decks/actions';
import { useTranslation } from 'react-multi-lang';
import { useDispatch } from 'react-redux';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share';

import { Action, Content, Option, Options, Title, Wrapper } from './styles';

export default function ShareOptions({ session }: any) {
  const t = useTranslation();
  const dispatch = useDispatch();

  const { id, path, name, isPublic } = session || {};
  const url = `${process.env.REACT_APP_URL}${PATH_SESSIONPUBLIC}/${
    path || '_'
  }/${id}`;
  const title = name;

  if (!session) return <></>;

  function makePublic() {
    const deck = Object.assign({}, session, { isPublic: true });
    dispatch(editSubmitAction({ deck }));
  }

  return (
    <Wrapper>
      <Content>
        <Title>{t('share.description')}</Title>

        <Action show={!isPublic}>
          <ButtonSecondary
            content={t('share.changePublic')}
            action={makePublic}
          />
        </Action>

        <Action show={isPublic}>
          <Options>
            <Option>
              <LinkedinShareButton url={url} title={title}>
                <IconLarge name={'linkedin'} />
              </LinkedinShareButton>
            </Option>
            <Option>
              <WhatsappShareButton url={url} title={title}>
                <IconLarge name={'whatsapp'} />
              </WhatsappShareButton>
            </Option>
            <Option>
              <FacebookShareButton url={url} title={title}>
                <IconLarge name={'facebook'} />
              </FacebookShareButton>
            </Option>
            <Option>
              <TelegramShareButton url={url} title={title}>
                <IconLarge name={'telegram'} />
              </TelegramShareButton>
            </Option>
            <Option>
              <TwitterShareButton url={url} title={title}>
                <IconLarge name={'twitter'} />
              </TwitterShareButton>
            </Option>
          </Options>
        </Action>
      </Content>
    </Wrapper>
  );
}
