import {
  Block,
  Content,
  Description,
  Details,
  Header,
  Opacity,
  Title,
  Wrapper
} from './styles';

export default function Public({ deck }) {
  if (!deck) {
    return <></>;
  }

  function openDeckClick() {}

  return (
    <Wrapper
      className="no-select"
      onClick={() => {
        openDeckClick();
      }}>
      <Content>
        <Opacity></Opacity>

        <Block>
          <Header>
            <Details>
              <Title>{deck.name}</Title>
              <Description>{deck.description}</Description>
            </Details>
          </Header>
        </Block>
      </Content>
    </Wrapper>
  );
}
