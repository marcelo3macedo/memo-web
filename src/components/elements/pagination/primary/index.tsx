import PrimaryButton from '@components/elements/buttons/Primary';
import { SmallLoading } from '@components/elements/loading/small';
import { PaginationListProps } from '@interfaces/lists/PaginationListProps';
import { useTranslation } from 'react-i18next';

import { Container } from './styles';

export function PrimaryPagination({
  actualPage,
  pages,
  action,
  loading
}: PaginationListProps) {
  const { t } = useTranslation();

  if (!pages || actualPage >= pages - 1) {
    return <></>;
  }

  if (loading) {
    return <SmallLoading />;
  }

  return (
    <Container>
      <PrimaryButton content={t('pagination.loadMore')} action={action} />
    </Container>
  );
}
