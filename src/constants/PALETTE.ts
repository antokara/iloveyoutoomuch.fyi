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
  DARK_RED: '#fb4d57ff',
  LIGHT_RED: '#ef655eff',
  PINK: '#ffb8a4ff',
  DARK_GREEN: '#317067ff',
  LIGHT_GREEN: '#68a176ff',
  DARK_CYAN: '#34b9b4ff',
  MEDIUM_CYAN: '#84c5bdff',
  LIGHT_CYAN: '#bde3d4ff'
};
