/**
 * Background Container
 */
import { Background as BackgroundComponent } from 'Components/layouts/themed/Background';
import * as React from 'react';
import { withRouter } from 'react-router';

const Background: React.ComponentClass = withRouter(BackgroundComponent);

export { Background };
