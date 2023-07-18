import { SubtitleText } from '@components/elements/texts/subtitle';
import { TitleText } from '@components/elements/texts/title';
import { TopHeaderProps } from '@interfaces/elements/headers/TopHeaderProps';

import { Content, SubTitle, Title, Wrapper } from './styles';

export function TopHeader({ title, description }: TopHeaderProps) {
  return (
    <Wrapper>
      <Content>
        <Title>
          <TitleText value={title} />
        </Title>
        <SubTitle>
          <SubtitleText value={description} />
        </SubTitle>
      </Content>
    </Wrapper>
  );
}
