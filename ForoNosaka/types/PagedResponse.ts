export interface BasePagedResponse<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
}

export interface PagedResponse<T> extends BasePagedResponse<T> {
  number: number;
  size: number;
  first: boolean;
  last: boolean;
  empty: boolean;
  numberOfElements: number;
}

export interface AdaptedPagedResponse<T> extends BasePagedResponse<T> {
}
