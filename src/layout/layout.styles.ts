import { css } from '@emotion/react';

import backgroundImg from '@/assets/fondoRyMpx.jpg';

const urlBackgroundImage = `url(${backgroundImg})`;

export const center = css`
  width: 100%;
  height: 100dvh;
  min-height: 780px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  gap: 15px;
  @media screen and (min-width: 600px) {
    gap: 30px;
  }
`;

export const header = {
  width: '100%',
  paddingTop: 1.5,
  paddingBottom: 1.5,
  color: 'ButtonText',
  fontSize: 14,
  textAlign: 'left'
};

export const rick = css`
  background-image: ${urlBackgroundImage};
  background-repeat: no-repeat;
  background-position: bottom center;
  background-size: cover;
  gap: 8px;
  @media screen and (min-width: 600px) {
    gap: 16px;
  }
`;
