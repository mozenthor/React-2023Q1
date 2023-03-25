export const currentData: IData = {
  name: '',
  date: '',
  city: '',
  radio: '',
  checkbox: false,
};

export const data: IData[] = [];

export interface IData {
  name: string;
  date: string;
  city: string;
  radio: string;
  checkbox: boolean;
}
