export const currentData: IData = {
  name: '',
  date: '',
  city: '',
  radio: '',
  checkbox: false,
  image: null,
};

export const data: IData[] = [];

export interface IData {
  name: string | undefined;
  date: string | undefined;
  city: string | undefined;
  radio: string | undefined;
  checkbox: boolean | undefined;
  image: File | undefined | null;
}
