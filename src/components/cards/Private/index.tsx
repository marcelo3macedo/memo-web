import IconSmall from '@components/icons/IconSmall';

import {
  Area,
  Container,
  Content,
  Header,
  RemoveArea,
  SecretContent,
  Title,
  Wrapper,
} from './styles';

export default function Private({ card, actions }: any) {
  function actionOpenClick(screen) {
    if (!actions.open) {
      return;
    }

    actions.open({ screen, card });
  }

  return (
    <Wrapper>
      <Container className='no-select'>
        <RemoveArea
          className='remove-area'
          onClick={() => {
            actionOpenClick('remove-card');
          }}>
          <IconSmall name='delete' />
        </RemoveArea>
        <Area
          onClick={() => {
            actionOpenClick('edit-card');
          }}>
          <Header>
            <Title>{card.title}</Title>
            <Content>{card.content}</Content>
            <SecretContent>{card.secretContent}</SecretContent>
          </Header>
        </Area>
      </Container>
    </Wrapper>
  );
}
