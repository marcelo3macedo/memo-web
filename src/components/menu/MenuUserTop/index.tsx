import IconMedium from '@components/icons/IconMedium';
import { PATH_ACCOUNT, PATH_HELP } from '@services/Navigation';
import { navigatePush } from '@store/mods/navigate/actions';
import { useDispatch } from 'react-redux';

import { Content, Info, Option, Options, Wrapper } from './styles';

export default function MenuUserTop() {
  const dispatch = useDispatch();

  function goToUsers() {
    dispatch(navigatePush({ path: PATH_ACCOUNT }));
  }

  function goToTutorial() {
    dispatch(navigatePush({ path: PATH_HELP }));
  }

  return (
    <Wrapper>
      <Content>
        <Info></Info>
        <Options>
          <Option onClick={goToTutorial}>
            <IconMedium name={'question'} />
          </Option>
          <Option onClick={goToUsers}>
            <IconMedium name={'userCovered'} />
          </Option>
        </Options>
      </Content>
    </Wrapper>
  );
}
