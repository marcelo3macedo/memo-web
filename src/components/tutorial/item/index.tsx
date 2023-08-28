import { TutorialImage } from '@components/elements/images/tutorial';
import { FeaturedText } from '@components/elements/texts/featured';
import { SubtitleText } from '@components/elements/texts/subtitle';
import { ItemTutorialProps } from '@interfaces/tutorial/ItemTutorialProps';

import { Banner, Body, Container, Header, HeaderTitle } from './styles';

export function ItemTutorial({
  number,
  title,
  content,
  image
}: ItemTutorialProps) {
  return (
    <Container>
      <Header>
        <SubtitleText value={number} />
        <HeaderTitle>
          <SubtitleText value={title} />
        </HeaderTitle>
      </Header>
      <Body>
        <FeaturedText value={content} />
      </Body>
      {image ? (
        <Banner>
          <TutorialImage source={image} />
        </Banner>
      ) : (
        <></>
      )}
    </Container>
  );
}
