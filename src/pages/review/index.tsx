import AdBanner from '@components/ads/banner';
import { SmallLoading } from '@components/elements/loading/small';
import { BackDeckReview } from '@components/reviews/backDeck';
import { FrontDeckReview } from '@components/reviews/frontDeck';
import { HeaderReview } from '@components/reviews/header';
import { optionSelectAction } from '@store/modules/review/actions';
import { RootState } from '@store/modules/rootReducer';
import { loadAction } from '@store/modules/sessions/actions';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Card, Content, Wrapper } from './styles';

export function Review() {
  const dispatch = useDispatch();
  const { card, loading: reviewLoading }: any = useSelector(
    (state: RootState) => state.review
  );
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    dispatch(loadAction());
  }, [dispatch]);

  if (reviewLoading) {
    return <SmallLoading />;
  }
  if (!card) {
    return <></>;
  }

  function changeFlip() {
    setFlip(!flip);
  }

  function optionSelected(optionId: string) {
    setFlip(false);
    dispatch(optionSelectAction({ id: optionId }));
  }

  return (
    <Wrapper>
      <Content>
        <HeaderReview />

        <Card>
          {!flip ? (
            <FrontDeckReview
              theme={card.title}
              question={card.content}
              action={changeFlip}
            />
          ) : (
            <BackDeckReview
              question={card.content}
              answer={card.secretContent}
              action={optionSelected}
            />
          )}
        </Card>
      </Content>
      <AdBanner id="ca-pub-9829912735551664" slot="1671005123" />
    </Wrapper>
  );
}
