import createSession from '@assets/banners/createSession.png';
import galleryNavigate from '@assets/banners/galleryNavigate.png';
import PictureAction from '@modules/actions/elements/PictureAction';
import { PATH_CREATESESSION, PATH_GALLERY } from '@services/Navigation';
import { navigatePush } from '@store/mods/navigate/actions';
import { useDispatch } from 'react-redux';

import { Content, Wrapper } from './styles';

export default function ActionsWelcome() {
  const dispatch = useDispatch();

  function galleryAction() {
    dispatch(navigatePush({ path: PATH_GALLERY }));
  }

  function createAction() {
    dispatch(navigatePush({ path: PATH_CREATESESSION }));
  }

  return (
    <Wrapper>
      <Content>
        <PictureAction icon={galleryNavigate} action={galleryAction} />
        <PictureAction icon={createSession} action={createAction} />
      </Content>
    </Wrapper>
  );
}
