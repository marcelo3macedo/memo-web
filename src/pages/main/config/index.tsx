import { ItemButton } from '@components/config/itemButton';
import { ItemCheckboxConfig } from '@components/config/itemCheckbox';
import DangerButton from '@components/elements/buttons/Danger';
import SecondaryButton from '@components/elements/buttons/Secondary';
import { SubtitleText } from '@components/elements/texts/subtitle';
import { TopHeader } from '@components/header/top';
import { updateAction } from '@store/modules/config/actions';
import { RootState } from '@store/modules/rootReducer';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { Block, BlockSmall, Content, Item, Items, Wrapper } from './styles';

export function Config() {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const { alertNewSessions, fontSize, language, nightMode, soundEffects } =
    useSelector((state: RootState) => state.config);

  function getLanguageName(value: string) {
    return t(`language.${value}`);
  }

  function getFontName(value: string) {
    return t(`font.${value}`);
  }

  function changeConfig(target: string, value: any) {
    dispatch(updateAction({ target, value }));
  }

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
                value={alertNewSessions}
                action={() => {
                  changeConfig('alertNewSessions', !alertNewSessions);
                }}
              />
              <ItemCheckboxConfig
                title={t('config.soundEffects')}
                value={soundEffects}
                action={() => {
                  changeConfig('soundEffects', !soundEffects);
                }}
              />
            </Block>
          </Item>
          <Item>
            <SubtitleText value={t('config.themes')} />
            <Block>
              <ItemCheckboxConfig
                title={t('config.nightMode')}
                value={nightMode}
                action={() => {
                  changeConfig('nightMode', !nightMode);
                }}
              />
              <ItemButton
                title={t('config.fontSize')}
                value={getFontName(fontSize)}
              />
            </Block>
          </Item>
          <Item>
            <SubtitleText value={t('config.language')} />
            <Block>
              <ItemButton
                title={t('config.languageApplication')}
                value={getLanguageName(language)}
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
