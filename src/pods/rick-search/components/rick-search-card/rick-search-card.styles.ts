import { css } from '@emotion/react';

export const card = css`
  --var-color: var(--color-alive);
  --var-angle: 25px;
  --var-border: 5px;
  --var-border-angle: calc(var(--var-angle) + var(--var-border) / 2);
  width: 220px;
  min-height: 300px;
  border-width: 6px;
  position: relative;
  z-index: 1;
  padding: calc(var(--var-angle) + 4px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
  color: rgb(var(--var-color));
  background-image: linear-gradient(
    135deg,
    rgba(var(--var-color) / 0.1) 5.46%,
    rgba(var(--var-color) / 0) 23.18%,
    rgba(var(--var-color) / 0.11) 29.88%,
    rgba(var(--var-color) / 0) 43.75%,
    rgba(var(--var-color) / 0.13) 57.39%,
    rgba(var(--var-color) / 0) 65.1%
  );
  box-shadow: 23px 23px 15px 0px rgba(0, 0, 0, 0.25) inset;
  clip-path: polygon(
    var(--var-angle) 0,
    100% 0%,
    100% calc(100% - var(--var-angle)),
    calc(100% - var(--var-angle)) 100%,
    0 100%,
    0 var(--var-angle)
  );

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    background-image: linear-gradient(
      170deg,
      rgba(var(--var-color)) 0.17%,
      rgba(var(--var-color) / 0.37) 16.29%,
      rgba(var(--var-color) / 0.46) 21.92%,
      rgba(var(--var-color)) 29.62%,
      rgba(var(--var-color) / 0.46) 55.45%,
      rgba(var(--var-color) / 0.31) 89.65%,
      rgba(var(--var-color)) 99.85%
    );
    clip-path: polygon(
      var(--var-angle) 0,
      0 var(--var-angle),
      0% 100%,
      var(--var-border) 100%,
      var(--var-border) var(--var-border-angle),
      var(--var-border-angle) var(--var-border),
      calc(100% - var(--var-border)) var(--var-border),
      calc(100% - var(--var-border)) calc(100% - var(--var-border-angle)),
      calc(100% - var(--var-border-angle)) calc(100% - var(--var-border)),
      var(--var-border) calc(100% - var(--var-border)),
      0% 100%,
      calc(100% - var(--var-angle)) 100%,
      100% calc(100% - var(--var-angle)),
      100% 0%
    );
    width: 100%;
    height: 100%;
  }
  &::after {
    content: '';
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(var(--var-color) / 0.07);
    pointer-events: none;
  }

  & h3 {
    margin: 0;
    min-height: 2.2rem;
    text-align: left;
    font-size: 1.2rem;
    line-height: 1.1;
    text-transform: uppercase;
    word-break: break-word;
    font-weight: 800;
  }

  & p {
    text-align: right;
    font-size: 15px;
    border-bottom: 1px solid rgb(var(--var-color));
    margin-bottom: 10px;
  }

  & a {
    display: block;
    text-decoration: none;
    color: black;
    padding: 0.5rem;
    border: none;
    border-radius: 0;
    background-color: rgb(var(--var-color));
    font-size: 13px;
    text-transform: uppercase;
    font-weight: 600;
  }

  &[data-satus='unknown'] {
    --var-color: var(--color-unknown);
  }

  &[data-satus='dead'] {
    --var-color: var(--color-dead);
  }
`;

export const cardImage = css`
  position: relative;
  border: 5px solid rgb(var(--var-color));
  border-image: linear-gradient(
      rgba(var(--var-color) / 1),
      rgba(var(--var-color) / 0.48),
      rgba(var(--var-color) / 0.48)
    )
    1;
  height: 130px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  & img {
    width: 100%;
    height: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    object-position: top;
    display: block;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: 0px 0px 15px 10px rgba(0, 0, 0, 0.35) inset;
    z-index: 1;
    background-image: linear-gradient(
      135deg,
      rgba(var(--var-color) / 0.1) 5.46%,
      rgba(var(--var-color) / 0) 23.18%,
      rgba(var(--var-color) / 0.11) 29.88%,
      rgba(var(--var-color) / 0) 43.75%,
      rgba(var(--var-color) / 0.13) 57.39%,
      rgba(var(--var-color) / 0) 65.1%
    );
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    background-color: #ffffff20;
  }
`;
