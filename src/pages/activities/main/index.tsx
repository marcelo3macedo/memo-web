import PrimaryAnimatedButton from '@components/elements/buttons/PrimaryAnimated';
import { SubtitleText } from '@components/elements/texts/subtitle';
import { TitleText } from '@components/elements/texts/title';
import { startAction } from '@store/modules/activities/actions';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Action, Content, Info, Title, Wrapper } from './styles';

export function Main() {
  const dispatch = useDispatch();
  const { slug } = useParams() as any;
  const { t } = useTranslation();
  const basePath = `activities.${slug}`;

  function startNow() {
    dispatch(startAction({ slug }));
  }

  return (
    <Wrapper>
      <Content>
        <Title>
          <TitleText value={t(`${basePath}.title`)} />
        </Title>
        <Info>
          <SubtitleText value={t(`${basePath}.description`)} />
        </Info>
        <Action>
          <PrimaryAnimatedButton
            content={t('activities.actions.startNow')}
            action={startNow}
          />
        </Action>
      </Content>
    </Wrapper>
  );
}
