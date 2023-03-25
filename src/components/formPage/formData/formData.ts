export const currentData: IFormDate = {
  name: '',
  date: '',
  city: '',
  radio: '',
  checkbox: false,
  image: null,
};

export const data: IFormDate[] = [];

export interface IFormDate {
  name: string | undefined;
  date: string | undefined;
  city: string | undefined;
  radio: string | undefined;
  checkbox: boolean | undefined;
  image: File | undefined | null;
}
