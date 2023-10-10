import { rickTheme } from '@/core';
import { css } from '@emotion/react';

export const info = css`
  grid-area: info;
  overflow: scroll;
  @media screen and (min-width: 800px) {
    align-self: flex-start;
    padding-top: 40px;
  }

  & p {
    color: var(--decoration-color);
    font-size: 16px;
    line-height: 1.6;
    letter-spacing: 2px;
    font-weight: 600;
    @media screen and (min-width: 800px) {
      font-size: 17px;
      line-height: 1.65;
    }
    @media screen and (min-width: 1000px) {
      font-size: 19px;
      line-height: 1.7;
    }
  }
  & span {
    font-size: 17px;
    font-weight: 400;
    color: ${rickTheme.palette.common.white};
    @media screen and (min-width: 800px) {
      font-size: 18px;
    }
    @media screen and (min-width: 1000px) {
      font-size: 20px;
    }
  }
`;
