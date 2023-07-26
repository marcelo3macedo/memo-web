import { ItemButton } from '@components/config/itemButton';
import { ItemCheckboxConfig } from '@components/config/itemCheckbox';
import DangerButton from '@components/elements/buttons/Danger';
import SecondaryButton from '@components/elements/buttons/Secondary';
import { SubtitleText } from '@components/elements/texts/subtitle';
import { TopHeader } from '@components/header/top';
import { FontSizeModal } from '@components/modals/fontSize';
import { LanguageModal } from '@components/modals/language';
import {
  CONFIGMODAL_FONT,
  CONFIGMODAL_LANGUAGEM
} from '@constants/configModal';
import { RouteOptions } from '@interfaces/routes/SessionRoutesProps';
import { PATH_FORGOTPASSWORD } from '@services/Navigation';
import { downloadMyData } from '@services/Personal';
import { updateAction } from '@store/modules/config/actions';
import { navigatePush } from '@store/modules/navigate/actions';
import { RootState } from '@store/modules/rootReducer';
import { removeAction } from '@store/modules/users/actions';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { Block, BlockSmall, Content, Item, Items, Wrapper } from './styles';

export function Config() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [modal, setModal] = useState('');

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

  function closeModal() {
    setModal('');
  }

  function downloadAction() {
    downloadMyData();
  }

  function changePasswordHandler() {
    dispatch(
      navigatePush({
        route: RouteOptions.auth,
        path: PATH_FORGOTPASSWORD
      })
    );
  }

  function removeUserAction() {
    dispatch(removeAction());
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
                action={() => {
                  setModal(CONFIGMODAL_FONT);
                }}
              />
            </Block>
          </Item>
          <Item>
            <SubtitleText value={t('config.language')} />
            <Block>
              <ItemButton
                title={t('config.languageApplication')}
                value={getLanguageName(language)}
                action={() => {
                  setModal(CONFIGMODAL_LANGUAGEM);
                }}
              />
            </Block>
          </Item>
          <Item>
            <SubtitleText value={t('config.data')} />
            <BlockSmall>
              <SecondaryButton
                content={t('config.downloadData')}
                action={downloadAction}
              />
            </BlockSmall>
          </Item>
          <Item>
            <SubtitleText value={t('config.account')} />
            <BlockSmall>
              <SecondaryButton
                content={t('config.changePassword')}
                action={changePasswordHandler}
              />
            </BlockSmall>
            <BlockSmall>
              <DangerButton
                content={t('config.excludeAccount')}
                action={removeUserAction}
              />
            </BlockSmall>
          </Item>
        </Items>
      </Content>
      <FontSizeModal modal={modal} closeAction={closeModal} />
      <LanguageModal modal={modal} closeAction={closeModal} />
    </Wrapper>
  );
}
