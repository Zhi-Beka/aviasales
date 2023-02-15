export interface IFilterState {
  filter: string;
  checked: boolean;
  error: boolean;
}

export interface IFilterActions {
  type: string;
  payload?: any;
}
