import IconSmall from '@components/icons/IconSmall';
import IEditHeader from '@modules/blocks/dtos/IEditHeader';
import { useTranslation } from 'react-multi-lang';

import {
  Action,
  ActionDescription,
  Content,
  Description,
  Title,
  Wrapper,
} from './styles';

export default function EditHeader({ name, description, action }: IEditHeader) {
  const t = useTranslation();
  return (
    <Wrapper>
      <Content>
        <Title>{name}</Title>
        <Description>{description}</Description>
      </Content>
      <Action onClick={action} className='no-select'>
        <IconSmall name='edit' />
        <ActionDescription>{t('decks.actions.edit')}</ActionDescription>
      </Action>
    </Wrapper>
  );
}
