export interface IFilterState {
  title: string;
  checked: boolean;
}

export interface IFilterActions {
  type: string;
  payload?: any;
}

export type checkboxType = { title: string; isChecked?: boolean };

export const checkboxes: checkboxType[] = [
  { title: 'Без пересадок' },
  { title: '1 пересадка' },
  { title: '2 пересадки' },
  { title: '3 пересадки' },
];
