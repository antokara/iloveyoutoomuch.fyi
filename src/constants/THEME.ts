import { createMuiTheme } from '@material-ui/core';
import { PALETTE } from 'Constants/PALETTE';
import { transparentize } from 'polished';

// style components Theme Object with Material UI theme combined
// @see https://www.styled-components.com/docs/advanced#theming
// @see https://material-ui.com/customization/default-theme/#default-theme
const THEME = {
  withUnits: {
    mixins: {}
  },
  ...createMuiTheme({
    typography: {
      useNextVariants: true,
      fontFamily: 'Merienda, sans-serif'
    },
    palette: {
      primary: {
        main: PALETTE.PINK,
        contrastText: 'rgba(255, 255, 255, 0.87)'
      },
      text: {
        primary: PALETTE.LIGHT_RED
      },
      background: {
        paper: transparentize(0.1, PALETTE.LIGHT_CYAN)
      }
    }
  })
};

export { THEME };
