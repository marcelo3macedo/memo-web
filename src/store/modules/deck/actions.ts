import { EditDeckProps } from '@interfaces/decks/EditDeckProps';
import { NewDeckProps } from '@interfaces/decks/NewDeckProps';

export function loadAction({ id }: any) {
  return {
    type: '@deck/LOAD',
    payload: { id }
  };
}

export function loadSuccessAction({ deck }: any) {
  return {
    type: '@deck/LOAD_SUCCESS',
    payload: {
      deck
    }
  };
}

export function saveAction({
  name,
  description,
  frequencyId,
  isPublic
}: NewDeckProps) {
  return {
    type: '@deck/SAVE',
    payload: { name, description, frequencyId, isPublic }
  };
}

export function saveSuccessAction({ id }: any) {
  return {
    type: '@deck/SAVE_SUCCESS',
    payload: { id }
  };
}

export function editAction({
  id,
  name,
  description,
  frequencyId,
  isPublic
}: EditDeckProps) {
  return {
    type: '@deck/EDIT',
    payload: { id, name, description, frequencyId, isPublic }
  };
}
