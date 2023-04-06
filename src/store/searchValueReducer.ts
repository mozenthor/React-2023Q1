export interface ISearchAction {
  type: string;
  searchValue: string;
}

const defaultState = {
  searchValue: '',
};

export const SearchValueReducer = (state = defaultState, action: ISearchAction) => {
  switch (action.type) {
    case 'setSearchValue':
      return { ...state, searchValue: action.searchValue };
    default:
      return state;
  }
};
