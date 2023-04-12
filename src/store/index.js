import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#7E7E7E',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './react.png',
  fullDecal: './vite.svg',
});

export default state;