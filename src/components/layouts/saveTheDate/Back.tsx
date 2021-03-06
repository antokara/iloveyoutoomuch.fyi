import { Fab } from '@material-ui/core';
import { ArrowBackIosRounded } from '@material-ui/icons';
import { ROUTES } from 'Constants/ROUTES';
import * as React from 'react';
import { Link } from 'react-router-dom';
import styledComponents from 'styled-components';

const ButtonWrapper = styledComponents.div`
  position: absolute;
  right: 1rem;
  top: 1rem;
`;

const Back: React.FunctionComponent = (): React.ReactElement<
  React.ReactNode
> => (
  <ButtonWrapper>
    <Fab size="small" color="primary" component={Link} to={ROUTES.HOME.PATH}>
      <ArrowBackIosRounded />
    </Fab>
  </ButtonWrapper>
);

export { Back };
