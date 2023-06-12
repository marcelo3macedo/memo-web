import ButtonPrimary from '@components/button/ButtonPrimary';
import PageLoading from '@components/loading/PageLoading';
import ShareOptions from '@components/modal/elements/ShareOptions';
import ViewCards from '@modules/blocks/elements/ViewCards';
import PageHeader from '@modules/headers/elements/PageHeader';
import { formatDateField } from '@services/Format';
import { cloneAction, loadAction } from '@store/mods/decks/actions';
import { RootState } from '@store/modules/rootReducer';
import { useEffect } from 'react';
import { useTranslation } from 'react-multi-lang';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Action, Content, Description, Share, Wrapper } from './styles';

export default function SessionPublic() {
  const dispatch = useDispatch();
  const t = useTranslation();
  const { selected } = useSelector((state: RootState) => state.decks);
  const { id } = useParams() as any;

  function reviewClick() {
    dispatch(cloneAction({ id }));
  }

  useEffect(() => {
    dispatch(loadAction({ id }));
  }, [dispatch, id]);

  if (!selected) {
    return (
      <Wrapper>
        <PageLoading />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Content>
        <PageHeader
          title={selected.name}
          subTitle={`${t('session.createdAt')} ${formatDateField(
            selected.createdAt
          )}`}
        />
        <Description>{selected.description}</Description>
        <Action>
          <ButtonPrimary content={t('actions.add')} action={reviewClick} />
        </Action>
        <Share>
          <ShareOptions session={selected} />
        </Share>
        <ViewCards />
      </Content>
    </Wrapper>
  );
}
