import { keyframes } from '@emotion/react';
import { CSSInterpolation } from '@emotion/serialize';
import tw, { css } from 'twin.macro';

export const topOpened = keyframes`
  0% {
    top: 0;
    transform: rotate(0);
  }
  50% {
    top: 4px;
    transform: rotate(0);
  }
  100% {
    top: 4px;
    transform: rotate(45deg);
  }
`;

export const topClosed = keyframes`
  0% {
    top: 4px;
    transform: rotate(45deg);
  }
  50% {
    top: 4px;
    transform: rotate(0deg);
  }
  100% {
    top: 0;
    transform: rotate(0deg);
  }
`;

export const bottomOpened = keyframes`
  0% {
    bottom: 0;
    transform: rotate(0);
  }
  50% {
    bottom: 4px;
    transform: rotate(0);
  }
  100% {
    bottom: 10px;
    transform: rotate(135deg);
  }
`;

export const bottomClosed = keyframes`
  0% {
    bottom: 4px;
    transform: rotate(135deg);
  }
  50% {
    bottom: 4px;
    transform: rotate(0);
  }
  100% {
    bottom: 0;
    transform: rotate(0);
  }
`;

export const midOpened = keyframes`
  50% {
    transform: scale(0);
    display: none !important;
  }
  100% {
    transform: scale(0);
    display: none !important;
    
  }
`;

export const midClosed = keyframes`
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;

export const bar1Styles = (open: boolean): CSSInterpolation => [
  css`
    width: 25px;
    animation: ease 0.7s ${open ? topOpened : topClosed} forwards;
  `,
];

export const bar2Styles = (open: boolean): CSSInterpolation => [
  css`
    width: ${open ? 25 : 20}px;
    margin: 5px 0;
    animation: ease 0.7s ${open ? midOpened : midClosed} forwards;
  `,
];

export const bar3Styles = (open: boolean): CSSInterpolation => [
  css`
    width: ${open ? 25 : 14}px;
    animation: ease 0.7s ${open ? bottomOpened : bottomClosed} forwards;
  `,
];

export const baseBar: CSSInterpolation = [
  css`
    transition: all ease-in-out 0.2s;
    height: 2px;
    position: relative;
    border-radius: 2px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.8);
  `,
  tw`bg-white`,
];
