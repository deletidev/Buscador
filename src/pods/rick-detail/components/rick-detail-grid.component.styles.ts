import { rickTheme } from '@/core';
import { css } from '@emotion/react';
import portalImg from '@/assets/portalRyM.png';

const urlPortalImg = `url(${portalImg})`;
export const grid = css`
  flex-grow: 1;
  display: grid;
  grid-template-areas: ' title' 'portal' 'info';
  grid-template-columns: auto;
  justify-content: center;
  justify-items: left;
  align-items: center;
  gap: ${rickTheme.spacing(2)};
  border-top: 4px solid var(--decoration-color);
  border-bottom: 4px solid var(--decoration-color);
  padding: ${rickTheme.spacing(0.5)};
  @media screen and (min-width: 800px) {
    grid-template-areas: 'title title' 'portal info';
    grid-template-columns: 1fr 1fr;
    gap: ${rickTheme.spacing(5)};
    row-gap: ${rickTheme.spacing(4)};
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
  @media screen and (min-width: 600px) {
    font-size: 38px;
  }
  @media screen and (min-width: 800px) {
    font-size: 50px;
    align-self: flex-end;
    margin-left: 41%;
    position: relative;
  }
`;

export const image = css`
  position: relative;
  z-index: 0;
  justify-self: center;
  grid-area: portal;
  @media screen and (min-width: 800px) {
    justify-self: right;
    align-self: start;
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
      width: 180px;
    }
  }
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 155%;
    background-image: ${urlPortalImg};
    background-repeat: no-repeat;
    background-size: contain;
    left: -50px;
    bottom: -32px;
    z-index: -1;
    @media screen and (min-width: 800px) {
      width: 115%;
      height: 280%;
      bottom: -130%;
      left: -55%;
    }
  }
`;
