import {
  RickDetailBarcodeComponent,
  RickDetailGridComponent
} from './components';
import { CharacterVm } from './rick-detail.vm';
import { container } from './rick-detail.component.styles';

interface Props {
  character: CharacterVm;
}

export const RickDetailComponent: React.FC<Props> = props => {
  const { character } = props;

  return (
    <section css={container} data-status={character.status.toLowerCase()}>
      <RickDetailGridComponent character={character}></RickDetailGridComponent>
      <RickDetailBarcodeComponent
        character={character}
      ></RickDetailBarcodeComponent>
    </section>
  );
};
