export const data: IData = {
  name: '',
  date: '',
  city: '',
  male: false,
  female: false,
  checkbox: false,
};

interface IData {
  name: string | undefined;
  date: string | undefined;
  city: string | undefined;
  male: boolean | undefined;
  female: boolean | undefined;
  checkbox: boolean | undefined;
}
