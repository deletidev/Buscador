import { characterMock } from './mockCharacters';
import { RickDetailComponent } from './rick-detail.component';

export const RickDetailContainer: React.FC = () => {
  const character = characterMock;
  return <h1>Página en desarrollo</h1>;
  // return <RickDetailComponent character={character}></RickDetailComponent>;
};
