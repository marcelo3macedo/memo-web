import tutorials from '@assets/banners/tutorials.png';
import ButtonPrimary from '@components/button/ButtonPrimary';
import PageHeader from '@modules/headers/elements/PageHeader';
import { PATH_TUTORIAL } from '@services/Navigation';
import { navigatePush } from '@store/mods/navigate/actions';
import React from 'react';
import { useTranslation } from 'react-multi-lang';
import { useDispatch } from 'react-redux';

import {
  Wrapper,
  Content,
  Description,
  Options,
  Option,
  Picture,
  OptionDescription,
  SubTitle,
  Action,
  ActionDescription,
  Link,
} from './styles';

export default function Help() {
  const t = useTranslation();
  const dispatch = useDispatch();

  function goToTutorial() {
    dispatch(navigatePush({ path: PATH_TUTORIAL }));
  }

  return (
    <Wrapper>
      <Content>
        <PageHeader title={t('help.title')} subTitle={t('help.subtitle')} />

        <Options>
          <Description>{t('help.description')}</Description>

          <Option onClick={goToTutorial}>
            <OptionDescription>{t('help.tutorial')}</OptionDescription>
            <Picture src={tutorials} />
          </Option>

          <Option onClick={goToTutorial}>
            <OptionDescription>{t('help.contact')}</OptionDescription>
            <OptionDescription>{t('help.contactThanks')}</OptionDescription>

            <SubTitle>{t('help.mail')}</SubTitle>
            <Action>
              <ActionDescription>{t('help.whatsapp')}</ActionDescription>
              <Link href='https://wa.me/5514997764993?text=Ol%C3%A1%2C%20estou%20com%20d%C3%BAvidas%20com%20a%20plataforma%20Memorizou'>
                <ButtonPrimary content={t('help.whats')} />
              </Link>
            </Action>
          </Option>
        </Options>
      </Content>
    </Wrapper>
  );
}
