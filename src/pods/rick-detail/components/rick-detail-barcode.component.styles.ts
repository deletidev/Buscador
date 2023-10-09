import { rickTheme } from '@/core';
import { css } from '@emotion/react';

export const barcode = css`
  display: flex;
  gap: ${rickTheme.spacing(2.5)};
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  color: var(--decoration-color);
  font-size: 14px;
  & *:last-child {
    flex-grow: 1;
    border-left: 4px solid var(--decoration-color);
  }
`;

export const date = css`
  position: relative;
  left: 15px;
  @media screen and (min-width: 800px) {
    fontsize: 16px;
    left: 25px;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 22px;
    width: 90%;
    height: 100%;
    background-image: repeating-linear-gradient(
        180deg,
        var(--decoration-color) 0%,
        var(--decoration-color) 4%,
        #15741f00 4%,
        #ffffff00 40%
      ),
      repeating-linear-gradient(
        180deg,
        var(--decoration-color) 0%,
        var(--decoration-color) 2%,
        #21b8c000 2%,
        #15b7b900 8%
      ),
      repeating-linear-gradient(
        180deg,
        var(--decoration-color) 1%,
        var(--decoration-color) 3%,
        #fefffa00 3%,
        #8e290300 28%
      ),
      repeating-linear-gradient(
        180deg,
        var(--decoration-color) 0%,
        var(--decoration-color) 2%,
        #3c4df500 2%,
        #ffffff00 16%
      ),
      repeating-linear-gradient(
        180deg,
        var(--decoration-color) 0%,
        var(--decoration-color) 1%,
        #22356d00 1%,
        #36e0ea00 3%
      );
    @media screen and (min-width: 800px) {
      width: 120%;
      right: 25px;
    }
  }
`;
