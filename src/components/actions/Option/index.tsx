import IconFull from '@components/icons/IconFull';
import IconMedium from '@components/icons/IconMedium';
import IOption from 'src/dtos/IOption';

import { Action, Content, Details, SubTitle, Title, Wrapper } from './styles';

export default function Option({
  title,
  subTitle,
  icon,
  action,
  template,
}: IOption) {
  return (
    <Wrapper onClick={action}>
      <Content template={!!template}>
        <Details>
          <IconFull name={icon} />
          <Title>{title}</Title>
          <SubTitle>{subTitle}</SubTitle>
        </Details>
        <Action>
          <IconMedium name={'next'} />
        </Action>
      </Content>
    </Wrapper>
  );
}
