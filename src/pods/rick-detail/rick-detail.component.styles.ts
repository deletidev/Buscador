import { rickTheme } from '@/core';
import { css } from '@emotion/react';

export const container = css`
  --background-color: #022302;
  --decoration-color: rgb(var(--color-alive));

  flex-grow: 1;
  display: flex;
  background-color: var(--background-color);
  padding: ${rickTheme.spacing(2)};
  text-align: left;
  gap: ${rickTheme.spacing(3)};
  @media screen and (min-width: 800px) {
    gap: ${rickTheme.spacing(6)};
    padding: ${rickTheme.spacing(3)};
  }
  &[data-status='dead'] {
    --decoration-color: rgb(var(--color-dead));
    --background-color: #230902;
  }
  &[data-status='unknown'] {
    --decoration-color: rgb(var(--color-unknown));
    --background-color: #1a0c01;
  }
`;
