import SecondaryAnimatedButton from '@components/elements/buttons/SecondaryAnimated';
import { HeaderText } from '@components/elements/texts/header';
import { TitleText } from '@components/elements/texts/title';
import { useTranslation } from 'react-i18next';

import { Board } from '../board';

import { BackAction, Content, Details, Scoreboard, Wrapper } from './styles';

export function Score() {
  const { t } = useTranslation();
  const score = [
    {
      name: 'Marcelo Macedo',
      points: 3000
    },
    {
      name: 'Marcelo Alberico',
      points: 2000
    },
    {
      name: 'Marcelo Alberico',
      points: 2000
    },
    {
      name: 'Marcelo Alberico',
      points: 2000
    },
    {
      name: 'Marcelo Alberico',
      points: 2000
    }
  ];

  function goBack() {
    console.log('go back...');
  }

  return (
    <Wrapper>
      <Content>
        <Scoreboard>
          <TitleText value={t('scoreboard.title')} />
          <Details>
            <HeaderText value={t('scoreboard.activity')} />
          </Details>
          <Board score={score} />
        </Scoreboard>
        <BackAction>
          <SecondaryAnimatedButton
            content={t('activities.actions.back')}
            action={goBack}
          />
        </BackAction>
      </Content>
    </Wrapper>
  );
}
