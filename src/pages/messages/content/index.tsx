import PrimaryAnimatedButton from '@components/elements/buttons/PrimaryAnimated';
import SecondaryAnimatedButton from '@components/elements/buttons/SecondaryAnimated';
import { SubtitleText } from '@components/elements/texts/subtitle';
import { TitleText } from '@components/elements/texts/title';
import { getRandomBackground } from '@helpers/message/background';
import { nextAction, previousAction } from '@store/modules/messages/actions';
import { RootState } from '@store/modules/rootReducer';
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
  const dispatch = useDispatch();
  const { sessions, activeIndex }: any = useSelector(
    (state: RootState) => state.messages
  );
  const session = sessions[activeIndex];
  const background = getRandomBackground();

  function beforeAction() {
    dispatch(previousAction());
  }

  function afterAction() {
    dispatch(nextAction());
  }

  function shareAction() {}

  return (
    <Wrapper>
      <Content>
        <Card background={background.default}>
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
                content={'Anterior'}
                action={beforeAction}
              />
            ) : (
              <></>
            )}
            {activeIndex + 1 < sessions.length ? (
              <PrimaryAnimatedButton content={'Próxima'} action={afterAction} />
            ) : (
              <></>
            )}
          </Action>
          <Action>
            <SecondaryAnimatedButton
              content={'Compartilhar'}
              action={shareAction}
            />
          </Action>
        </Actions>
      </Content>
    </Wrapper>
  );
}
