import { DetailsDecks } from '@components/decks/details';
import NotFound from '@components/decks/notFound';
import PrimaryButton from '@components/elements/buttons/Primary';
import { SmallLoading } from '@components/elements/loading/small';
import { SubtitleText } from '@components/elements/texts/subtitle';
import { TitleText } from '@components/elements/texts/title';
import { formatTimeAsString } from '@helpers/DateHelper';
import { RouteOptions } from '@interfaces/routes/SessionRoutesProps';
import { PATH_REVIEWSESSION } from '@services/Navigation';
import { loadAction } from '@store/modules/deck/actions';
import { navigatePush } from '@store/modules/navigate/actions';
import { RootState } from '@store/modules/rootReducer';
import { feedAction } from '@store/modules/session/actions';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Action, Body, Content, Details, Header, Row, Wrapper } from './styles';

export function PublicSession() {
  const { id } = useParams() as any;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { deck, loading } = useSelector((state: RootState) => state.deck);
  const {
    name,
    description,
    createdAt,
    area,
    institution,
    category,
    year,
    cardsCount
  } = deck || ({} as any);
  const subTitle = `${t('deck.createdAt')} ${formatTimeAsString(createdAt)}`;
  const createdDateTime = formatTimeAsString(createdAt);
  const areaName = area?.name ? area.name : t('sessions.areaNotSpecified');
  const institutionName = institution?.name
    ? institution.name
    : t('sessions.institution');
  const categoryName = category?.name
    ? category.name
    : t('sessions.categoryNotSpecified');
  const yearName = year ? year : t('sessions.yearNotSpecified');

  useEffect(() => {
    dispatch(loadAction({ id }));
  }, [dispatch, id]);

  function action() {
    dispatch(feedAction({ deckId: id }));
    dispatch(
      navigatePush({
        route: RouteOptions.review,
        path: PATH_REVIEWSESSION
      })
    );
  }
  if (loading) {
    return <SmallLoading />;
  }
  if (!deck) {
    return <NotFound />;
  }

  return (
    <Wrapper>
      <Content>
        <Header>
          <TitleText value={name} />
          <Details>
            <SubtitleText value={subTitle} />
          </Details>
          <Action>
            <PrimaryButton content={t('actions.review')} action={action} />
          </Action>
        </Header>
        <Body>
          <DetailsDecks title={t('sessions.description')} value={description} />
          <Row>
            <DetailsDecks title={t('sessions.area')} value={areaName} />
            <DetailsDecks
              title={t('sessions.institution')}
              value={institutionName}
            />
          </Row>
          <Row>
            <DetailsDecks title={t('sessions.category')} value={categoryName} />
            <DetailsDecks title={t('sessions.year')} value={yearName} />
          </Row>
          <Row>
            <DetailsDecks title={t('sessions.cardsCount')} value={cardsCount} />
            <DetailsDecks
              title={t('sessions.createdAt')}
              value={createdDateTime}
            />
          </Row>
        </Body>
      </Content>
    </Wrapper>
  );
}
