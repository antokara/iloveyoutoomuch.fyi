/**
 * a collection of colors
 */
interface IColors {
  readonly [KEY: string]: string;
}

/**
 * the application's colors
 */
export const PALETTE: IColors = {
  DARK_RED: '#fb4d57',
  LIGHT_RED: '#ef655e',
  PINK: '#ffb8a4',
  DARK_GREEN: '#317067',
  LIGHT_GREEN: '#68a176',
  DARK_CYAN: '#34b9b4',
  MEDIUM_CYAN: '#84c5bd',
  LIGHT_CYAN: '#bde3d4'
};
