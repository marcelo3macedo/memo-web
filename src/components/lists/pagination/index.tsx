import PrimaryButton from '@components/elements/buttons/Primary';
import { PaginationListProps } from '@interfaces/lists/PaginationListProps';
import { useTranslation } from 'react-i18next';

import { Container } from './styles';

export function Pagination({ actualPage, pages, action }: PaginationListProps) {
  const { t } = useTranslation();

  if (!actualPage || !pages || actualPage > pages - 1) {
    return <></>;
  }

  return (
    <Container>
      <PrimaryButton content={t('pagination.loadMore')} action={action} />
    </Container>
  );
}
