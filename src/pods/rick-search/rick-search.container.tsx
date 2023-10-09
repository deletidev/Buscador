import React from 'react';

import { RickSearchComponent } from './rick-search.component';
import { useCharacterPage } from './rick-search.hook';

export const RickSearchContainer: React.FC = () => {
  const { dispatch, searchState, updateCharactersPage } = useCharacterPage();

  React.useEffect(() => {
    updateCharactersPage(searchState.page);
  }, []);

  return (
    <RickSearchComponent
      searchState={searchState}
      dispatch={dispatch}
      updateCharactersPage={updateCharactersPage}
    ></RickSearchComponent>
  );
};
