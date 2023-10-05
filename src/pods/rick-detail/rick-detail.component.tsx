import { css } from '@emotion/react';
import { CharacterVm } from './rick-detail.vm';
import { rickTheme } from '@/core';

interface Props {
  character: CharacterVm;
}

const hola = {
  '--background-color': '#022302',
  '--decoration-color': 'rgb(var(--color-alive))',
  flexGrow: 1,
  display: 'flex',
  backgroundColor: 'var(--background-color)',
  padding: '20px',
  marginBottom: '5px',
  'text-align': 'left',
  gap: rickTheme.spacing(3),
  '&[data-status="dead"]': {
    '--decoration-color': 'rgb(var(--color-dead))',
    '--background-color': '#230902'
  },
  '&[data-status="unknown"]': {
    '--decoration-color': 'rgb(var(--color-unknown))',
    '--background-color': '#1a0c01'
  }
};

const grande = css`
  flex-grow: 1;
  display: grid;
  border-top: 4px solid var(--decoration-color);
  border-bottom: 4px solid var(--decoration-color);
  padding: ${rickTheme.spacing(0.5)};

  & .img {
    position: relative;
    z-index: 1;
    align-self: center;
    padding-left: 20px;

    img {
      display: block;
      width: 130px;
      border: 3px solid var(--decoration-color);
      padding: 0;
      height: 100%;
      object-fit: cover;
      margin-right: auto;
      margin-left: auto;
      box-shadow: 0 0 10px black;
    }
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 160%;
      background-image: url('/assets/klipartz.com.png');
      background-repeat: no-repeat;
      background-size: contain;
      left: -10px;
      bottom: -30px;
      /* background-color: blue; */
      /* rotate: 270deg; */
      z-index: -1;
    }
  }

  & *:last-child {
    align-self: flex-end;
    padding-bottom: 8px;
  }
`;
const codigo = css`
  display: flex;
  gap: 10px;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  color: var(--decoration-color);
  font-size: 14px;
  & *:last-child {
    flex-grow: 1;
    border-left: 4px solid var(--decoration-color);
  }
`;

const cssc = css({
  // '--background-style': 'green',
  color: 'var(--decoration-color)',
  backgroundColor: 'var(--decoration-style)',
  // padding: rickTheme.spacing(2),
  fontSize: '32px',
  lineHeight: '1.2'
});
const span = css({
  // '--background-style': 'green',
  color: 'var(--decoration-color)',

  fontSize: '16px',
  lineHeight: '1.6',
  letterSpacing: '2px',
  fontWeight: 600,
  '& span': {
    fontSize: '17px',
    fontWeight: 400,
    color: rickTheme.palette.common.white
  }
});
const fecha = css({
  position: 'relative',
  left: '15px',
  '&::before': {
    position: 'absolute',
    top: 0,
    right: '22px',
    content: '""',
    width: '90%',
    height: '100%',
    backgroundImage:
      'repeating-linear-gradient( 180deg, var(--decoration-color) 0%, var(--decoration-color) 4%, #15741f00 4%, #ffffff00 40%), repeating-linear-gradient( 180deg,var(--decoration-color) 0%,var(--decoration-color) 2%, #21b8c000 2%, #15b7b900 8%), repeating-linear-gradient(180deg,var(--decoration-color) 1%,var(--decoration-color) 3%,#fefffa00 3%,#8e290300 28%), repeating-linear-gradient(180deg, var(--decoration-color) 0%, var(--decoration-color) 2%, #3c4df500 2%, #ffffff00 16% ),repeating-linear-gradient( 180deg, var(--decoration-color) 0%, var(--decoration-color) 1%, #22356d00 1%, #36e0ea00 3%)'
  }
});

export const RickDetailComponent: React.FC<Props> = props => {
  const { character } = props;

  return (
    <div css={hola} data-status={character.status.toLowerCase()}>
      <div css={grande}>
        <h1 css={cssc}>{character.name}</h1>
        <div className="img">
          <img src={character.image} alt={character.name} />
        </div>
        <div>
          <p css={span}>
            State: <span>{character.status}</span>
          </p>
          <p css={span}>
            Species: <span>{character.species}</span>
          </p>
          <p css={span}>
            Type: <span>{character.type}</span>
          </p>
          <p css={span}>
            Gender: <span>{character.gender}</span>
          </p>
          <p css={span}>
            Origin: <span>{character.origin.name}</span>
          </p>
          <p css={span}>
            Location: <span>{character.location.name}</span>
          </p>
        </div>
      </div>
      <div css={codigo}>
        <div css={fecha}>{character.created}</div>
        <span></span>
      </div>
    </div>
  );
};
