import SubTitle from '@components/elements/SubTitle';
import { CARDS_PRIVATE } from '@constants/Cards';
import List from '@modules/cards/elements/List';
import { RootState } from '@store/modules/rootReducer';
import { useTranslation } from 'react-multi-lang';
import { useSelector } from 'react-redux';

import { Container, Wrapper } from './styles';

export default function EditCards() {
  const t = useTranslation();
  const { list } = useSelector((state: RootState) => state.cards);

  return (
    <Wrapper>
      <Container>
        <SubTitle title={t('editCard.title')} />
        <List cards={list} type={CARDS_PRIVATE} />
      </Container>
    </Wrapper>
  );
}
