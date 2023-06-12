import IReviewItem from '@modules/tutorial/dtos/IReviewItem';
import React from 'react';

import {
  Wrapper,
  Content,
  Title,
  Header,
  Position,
  Description,
  Image,
} from './styles';

export default function ReviewItem({
  position,
  title,
  description,
  imageUrl,
}: IReviewItem) {
  return (
    <Wrapper>
      <Content>
        <Header>
          <Position>{position}</Position>
          <Title>{title}</Title>
        </Header>
        {description.split('|').map((d, i) => {
          return <Description key={i}>{d}</Description>;
        })}
        <Image src={imageUrl} />
      </Content>
    </Wrapper>
  );
}
