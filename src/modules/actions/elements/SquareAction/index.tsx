import IconFull from '@components/icons/IconFull';
import IconMedium from '@components/icons/IconMedium';
import ISquareAction from '@modules/actions/dtos/ISquareAction';

import {
  Action,
  Box,
  Content,
  Details,
  SubTitle,
  Title,
  Wrapper,
} from './styles';

export default function SquareAction({
  active = null,
  title,
  subTitle,
  icon,
  action,
}: ISquareAction) {
  return (
    <Wrapper onClick={action} className='no-select'>
      <Box>
        <Content template={active}>
          <Details>
            <IconFull name={icon} />
            <Title>{title}</Title>
            <SubTitle>{subTitle}</SubTitle>
          </Details>
          <Action>
            <IconMedium name={'next'} />
          </Action>
        </Content>
      </Box>
    </Wrapper>
  );
}
