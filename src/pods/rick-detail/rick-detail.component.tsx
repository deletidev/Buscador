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
  },
  '@media screen and (min-width: 800px)': {
    gap: rickTheme.spacing(6)
  }
};

const grande = css`
  flex-grow: 1;
  display: grid;
  grid-template-areas: ' title' 'portal' 'info';
  grid-template-columns: 'auto';
  justify-items: left;
  align-items: center;
  gap: 20px;
  border-top: 4px solid var(--decoration-color);
  border-bottom: 4px solid var(--decoration-color);
  padding: ${rickTheme.spacing(0.5)};
  @media screen and (min-width: 800px) {
    grid-template-areas: 'portal title' 'portal info';
    grid-template-columns: 'auto 1fr';
    gap: 40px;
  }
  & .img {
    position: relative;
    z-index: 1;
    padding-left: 58px;
    grid-area: portal;
    @media screen and (min-width: 800px) {
      justify-self: right;
    }
    img {
      display: block;
      width: 140px;
      border: 3px solid var(--decoration-color);
      padding: 0;
      height: 100%;
      object-fit: cover;
      margin-right: auto;
      margin-left: auto;
      box-shadow: 0 0 10px black;
      @media screen and (min-width: 800px) {
        width: 200px;

        margin-left: 90px;
      }
    }
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 155%;
      background-image: url('/assets/portalRyM.png');
      background-repeat: no-repeat;
      background-size: contain;
      left: -10px;
      bottom: -30px;
      /* background-color: blue; */
      /* rotate: 270deg; */
      z-index: -1;
      @media screen and (min-width: 800px) {
        height: 250%;
        width: 80%;
        bottom: -80%;
        left: -25px;
      }
    }
  }

  & div:last-child {
    padding-bottom: 8px;
    grid-area: info;
    @media screen and (min-width: 800px) {
      align-self: flex-start;
      padding-top: 30px;
    }
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

const cssc = css`
  grid-area: title;
  // '--background-style': 'green',
  color: var(--decoration-color);
  // padding: rickTheme.spacing(2),
  font-size: 32px;
  line-height: 1.2;
  @media screen and (min-width: 800px) {
    font-size: 50px;
    align-self: flex-end;
    padding-bottom: 50px;
    position: relative;
    left: -70px;
  }
`;

const span = css({
  // '--background-style': 'green',
  color: 'var(--decoration-color)',

  fontSize: '16px',
  lineHeight: '1.6',
  letterSpacing: '2px',
  fontWeight: 600,
  '@media screen and (min-width: 800px)': {
    fontSize: '20px'
  },
  '& span': {
    fontSize: '17px',
    fontWeight: 400,
    color: rickTheme.palette.common.white,
    '@media screen and (min-width: 800px)': {
      fontSize: '22px'
    }
  }
});
const fecha = css({
  position: 'relative',
  left: '15px',
  '@media screen and (min-width: 800px)': {
    fontSize: '16px',
    left: '25px'
  },
  '&::before': {
    position: 'absolute',
    top: 0,
    right: '22px',
    content: '""',
    width: '90%',
    height: '100%',
    backgroundImage:
      'repeating-linear-gradient( 180deg, var(--decoration-color) 0%, var(--decoration-color) 4%, #15741f00 4%, #ffffff00 40%), repeating-linear-gradient( 180deg,var(--decoration-color) 0%,var(--decoration-color) 2%, #21b8c000 2%, #15b7b900 8%), repeating-linear-gradient(180deg,var(--decoration-color) 1%,var(--decoration-color) 3%,#fefffa00 3%,#8e290300 28%), repeating-linear-gradient(180deg, var(--decoration-color) 0%, var(--decoration-color) 2%, #3c4df500 2%, #ffffff00 16% ),repeating-linear-gradient( 180deg, var(--decoration-color) 0%, var(--decoration-color) 1%, #22356d00 1%, #36e0ea00 3%)',
    '@media screen and (min-width: 800px)': {
      width: '120%',
      right: '25px'
    }
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
          {character.type && (
            <p css={span}>
              Type: <span>{character.type}</span>
            </p>
          )}
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
