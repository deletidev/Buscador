import { rickTheme } from '@/core';
import { css } from '@emotion/react';

export const grid = css`
  flex-grow: 1;
  display: grid;
  grid-template-areas: ' title' 'portal' 'info';
  grid-template-columns: 'auto';
  justify-items: left;
  align-items: center;
  gap: ${rickTheme.spacing(2)};
  border-top: 4px solid var(--decoration-color);
  border-bottom: 4px solid var(--decoration-color);
  padding: ${rickTheme.spacing(0.5)};
  @media screen and (min-width: 800px) {
    grid-template-areas: 'portal title' 'portal info';
    grid-template-columns: 'auto 1fr';
    gap: ${rickTheme.spacing(5)};
  }
`;

export const title = css`
  grid-area: title;
  position: relative;
  z-index: 1;
  word-break: break-word;
  color: var(--decoration-color);
  font-size: 29px;
  line-height: 1.2;
  @media screen and (min-width: 800px) {
    font-size: 50px;
    align-self: flex-end;
    padding-bottom: 50px;
    position: relative;
    left: -70px;
  }
`;

export const image = css`
  position: relative;
  z-index: 0;
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
    bottom: -32px;
    z-index: -1;
    @media screen and (min-width: 800px) {
      height: 250%;
      width: 80%;
      bottom: -80%;
      left: -25px;
    }
  }
`;
