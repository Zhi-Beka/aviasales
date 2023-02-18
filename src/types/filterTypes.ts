export enum FilterActions {
  FILTER_ALL = 'Все',
  FILTER_ONE = '1 пересадка',
  FILTER_TWO = '2 пересадки',
  FILTER_THREE = '3 пересадки',
  FILTER_NO = 'Без пересадок',
}

export type checkboxType = { title: string; isChecked?: boolean };

export interface ICheckboxState {
  checkboxes: checkboxType[];
}

export interface IFilterActions {
  type: string;
  payload: any;
}
