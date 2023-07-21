import { ItemButton } from '@components/config/itemButton';
import { ItemCheckboxConfig } from '@components/config/itemCheckbox';
import DangerButton from '@components/elements/buttons/Danger';
import SecondaryButton from '@components/elements/buttons/Secondary';
import { SubtitleText } from '@components/elements/texts/subtitle';
import { TopHeader } from '@components/header/top';
import { useTranslation } from 'react-i18next';

import { Block, BlockSmall, Content, Item, Items, Wrapper } from './styles';

export function Config() {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Content>
        <TopHeader
          title={t('config.title')}
          description={t('config.subTitle')}
        />

        <Items>
          <Item>
            <SubtitleText value={t('config.notifications')} />

            <Block>
              <ItemCheckboxConfig
                title={t('config.alertNewSessions')}
                value={true}
              />
              <ItemCheckboxConfig
                title={t('config.soundEffects')}
                value={false}
              />
            </Block>
          </Item>
          <Item>
            <SubtitleText value={t('config.themes')} />

            <Block>
              <ItemCheckboxConfig title={t('config.nightMode')} value={true} />
              <ItemButton title={t('config.fontSize')} value={'Normal'} />
            </Block>
          </Item>
          <Item>
            <SubtitleText value={t('config.language')} />
            <Block>
              <ItemButton
                title={t('config.languageApplication')}
                value={'Português'}
              />
            </Block>
          </Item>
          <Item>
            <SubtitleText value={t('config.data')} />
            <BlockSmall>
              <SecondaryButton content={t('config.downloadData')} />
            </BlockSmall>
          </Item>
          <Item>
            <SubtitleText value={t('config.account')} />
            <BlockSmall>
              <SecondaryButton content={t('config.changePassword')} />
            </BlockSmall>
            <BlockSmall>
              <DangerButton content={t('config.excludeAccount')} />
            </BlockSmall>
          </Item>
        </Items>
      </Content>
    </Wrapper>
  );
}
