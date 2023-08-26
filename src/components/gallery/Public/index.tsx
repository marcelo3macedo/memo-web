import { SubtitleText } from '@components/elements/texts/subtitle';
import IconMedium from '@components/icons/IconMedium';
import { CategoryInfo } from '@components/infos/category';
import { InstitutionInfo } from '@components/infos/institution';
import { NumberOfCardsInfo } from '@components/infos/numberOfCards';
import { RouteOptions } from '@interfaces/routes/SessionRoutesProps';
import { PATH_PUBLICSESSION } from '@services/Navigation';
import { navigatePush } from '@store/modules/navigate/actions';
import { useDispatch } from 'react-redux';
import { useTheme } from 'styled-components';

import { Content, Header, InfoBlock, Infos, Wrapper } from './styles';

export default function Public({ deck }) {
  const dispatch = useDispatch();

  if (!deck) {
    return <></>;
  }

  function action(id) {
    dispatch(
      navigatePush({
        route: RouteOptions.session,
        path: `${PATH_PUBLICSESSION}/${id}`
      })
    );
  }

  const { name: categoryName } = deck.category || ({} as any);
  const { name: institutionName } = deck.institution || ({} as any);
  const theme = useTheme() as any;

  return (
    <Wrapper className="no-select" onClick={() => action(deck.id)}>
      <Content>
        <Header>
          <SubtitleText value={deck.name} />
        </Header>
        <Infos>
          <InfoBlock>
            <CategoryInfo text={categoryName} />
            <InstitutionInfo text={institutionName} />
          </InfoBlock>
          <InfoBlock>
            <NumberOfCardsInfo text={deck.cardsCount} />
            <IconMedium name={'nextRepo'} style={{ fill: theme.GRAY_COLOR }} />
          </InfoBlock>
        </Infos>
      </Content>
    </Wrapper>
  );
}
