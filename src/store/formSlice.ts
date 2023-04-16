import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IFormValid {
  nameValid: boolean;
  dateValid: boolean;
  cityValid: boolean;
  radioValid: boolean;
  checkboxValid: boolean;
  fileValid: boolean;
}

export interface IFormData {
  inputName: string | undefined;
  inputDate: string | undefined;
  selectCity: string | undefined;
  inputRadio: string | undefined;
  inputCheckbox: boolean | undefined;
  inputFile?: FileList | null;
  img?: string | undefined;
}

interface IStateForm {
  valuesValid: IFormValid;
  cardData: IFormData[];
  success: boolean;
}

interface IFormValuesValidAction {
  valuesValid: IFormValid;
}

interface IFormCardDataAction {
  data: IFormData;
}

const initialState: IStateForm = {
  valuesValid: {
    nameValid: true,
    dateValid: true,
    cityValid: true,
    radioValid: true,
    checkboxValid: true,
    fileValid: true,
  },
  cardData: [],
  success: false,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setValuesValid(state, action: PayloadAction<IFormValuesValidAction>) {
      state.valuesValid = { ...action.payload.valuesValid };
    },
    setCardData(state, action: PayloadAction<IFormCardDataAction>) {
      state.cardData.push(action.payload.data);
    },
    setSuccess(state, action) {
      state.success = action.payload.success;
    },
  },
});

export const { setValuesValid, setCardData, setSuccess } = formSlice.actions;

export default formSlice.reducer;
