import ButtonPrimary from '@components/button/ButtonPrimary';
import { clearAction } from '@store/mods/validation/actions';
import { RootState } from '@store/modules/rootReducer';
import { useTranslation } from 'react-multi-lang';
import { useDispatch, useSelector } from 'react-redux';

import {
  Actions,
  Content,
  Message,
  MessageArea,
  Title,
  Wrapper,
} from './styles';

export default function ValidationAlert() {
  const t = useTranslation();
  const dispatch = useDispatch();
  const { invalid, message } = useSelector(
    (state: RootState) => state.validations
  );
  const info = !message || !t(message) ? t('auth.defaultError') : t(message);

  function closeAlert() {
    dispatch(clearAction());
  }

  return (
    <Wrapper show={invalid}>
      <Content>
        <Title>{t('alert.title')}</Title>
        <MessageArea>
          <Message>{t(info)}</Message>
          <Message>{t('auth.tryAgain')}</Message>
        </MessageArea>
        <Actions>
          <ButtonPrimary content='Ok' action={closeAlert} />
        </Actions>
      </Content>
    </Wrapper>
  );
}
