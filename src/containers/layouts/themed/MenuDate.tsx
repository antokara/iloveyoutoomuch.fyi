/**
 * MenuDate Container
 */
import { MenuDate as MenuDateComponent } from 'Components/layouts/themed/menuDate/MenuDate';
import * as React from 'react';
import { withRouter } from 'react-router';

const MenuDate: React.ComponentClass = withRouter(MenuDateComponent);

export { MenuDate };
