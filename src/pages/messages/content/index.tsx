import PrimaryAnimatedButton from '@components/elements/buttons/PrimaryAnimated';
import SecondaryAnimatedButton from '@components/elements/buttons/SecondaryAnimated';
import { SubtitleText } from '@components/elements/texts/subtitle';
import { TitleText } from '@components/elements/texts/title';
import { getRandomBackground } from '@helpers/message/background';
import { RouteOptions } from '@interfaces/routes/SessionRoutesProps';
import { PATH_MESSAGE_MAIN } from '@services/Navigation';
import { nextAction, previousAction } from '@store/modules/messages/actions';
import { navigatePush } from '@store/modules/navigate/actions';
import { RootState } from '@store/modules/rootReducer';
import html2canvas from 'html2canvas';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import {
  Action,
  Actions,
  Card,
  CardContent,
  Content,
  Info,
  Title,
  Wrapper
} from './styles';

export function MessageContent() {
  const { t } = useTranslation();
  const divCard = useRef(null);
  const dispatch = useDispatch();
  const { target, sessions, activeIndex }: any = useSelector(
    (state: RootState) => state.messages
  );
  const session = sessions[activeIndex];
  const background = getRandomBackground();

  function backAction() {
    dispatch(
      navigatePush({
        route: RouteOptions.message,
        path: `${PATH_MESSAGE_MAIN}/${target}`
      })
    );
  }

  function beforeAction() {
    dispatch(previousAction());
  }

  function afterAction() {
    dispatch(nextAction());
  }

  function updateBackground() {
    window.location.reload();
  }

  async function shareAction() {
    if (divCard.current) {
      const canvas = await html2canvas(divCard.current);
      const imageUrl = canvas.toDataURL();
      const a = document.createElement('a');
      a.href = imageUrl;
      a.download = `${target}_${activeIndex}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  }

  return (
    <Wrapper>
      <Content>
        <Card background={background.default} ref={divCard}>
          <CardContent>
            <Info>
              <TitleText value={session.answer} />
            </Info>
            <Title>
              <SubtitleText value={session.question} />
            </Title>
          </CardContent>
        </Card>
        <Actions>
          <Action>
            {activeIndex > 0 ? (
              <PrimaryAnimatedButton
                content={t('messages.actions.before')}
                action={beforeAction}
              />
            ) : (
              <></>
            )}
            {activeIndex + 1 < sessions.length ? (
              <PrimaryAnimatedButton
                content={t('messages.actions.next')}
                action={afterAction}
              />
            ) : (
              <></>
            )}
          </Action>
          <Action>
            <SecondaryAnimatedButton
              content={t('messages.actions.download')}
              action={shareAction}
            />
            <SecondaryAnimatedButton
              content={t('messages.actions.background')}
              action={updateBackground}
            />
          </Action>
          <Action>
            <SecondaryAnimatedButton
              content={t('messages.actions.back')}
              action={backAction}
            />
          </Action>
        </Actions>
      </Content>
    </Wrapper>
  );
}
