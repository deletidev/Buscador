import React from 'react';
import { CharacterVm } from '../rick-detail.vm';
import { barcode, date } from './rick-detail-barcode.component.styles';

interface Props {
  character: CharacterVm;
}

export const RickDetailBarcodeComponent: React.FC<Props> = props => {
  const { character } = props;
  return (
    <div css={barcode}>
      <div css={date}>{character.created}</div>
      <span></span>
    </div>
  );
};
