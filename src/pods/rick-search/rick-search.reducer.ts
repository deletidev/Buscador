import { catchCharactersListApi } from './api/api';
import { mapCharactersListFromApiToVm } from './rick-search.mapper';
import { CharacterVm } from './rick-search.vm';

export interface SearchRick {
  value: string;
  charactersList: CharacterVm[];
  page: number;
  totalPages: number;
}

export interface Action {
  type: ActionIds;
  payload?: any;
}

type ActionIds =
  | 'setValue'
  | 'setCharactersList'
  | 'setPage'
  | 'setTotalPages'
  | 'callApiCharacters';

export const useSearchReducer = (
  state: SearchRick,
  action: Action
): SearchRick => {
  switch (action.type) {
    case 'setCharactersList':
      return {
        ...state,
        charactersList: action.payload
      };
    case 'setValue':
      return {
        ...state,
        value: action.payload
      };
    case 'setTotalPages':
      return {
        ...state,
        totalPages: action.payload
      };
    case 'setPage':
      return {
        ...state,
        page: action.payload
      };

    default:
      return state;
  }
};
