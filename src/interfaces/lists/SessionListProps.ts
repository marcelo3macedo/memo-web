export interface SessionListProps {
  actualPage: number;
  pages: number;
  results: any;
  total: number;
  loading: boolean;
  type: Types;
}

export enum Types {
  Public,
  Private
}
