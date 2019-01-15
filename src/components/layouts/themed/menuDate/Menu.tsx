import { Button, Menu as CoreMenu, MenuItem } from '@material-ui/core';
import { MenuRounded } from '@material-ui/icons';
import { PALETTE } from 'Constants/PALETTE';
import * as React from 'react';
import { Link } from 'react-router-dom';
import styledComponents from 'styled-components';

const Icon: React.FunctionComponent = styledComponents(MenuRounded)`
  margin-right: ${p => p.theme.spacing.unit}px;
`;

const Label: React.FunctionComponent = styledComponents.span`
  font-weight: bold;
  font-family: Merienda, sans-serif;
  text-shadow: 1px 1px 2px #000;
`;

const Wrapper: React.FunctionComponent = styledComponents.div`
  color: ${PALETTE.PINK};
`;

const buildItems = (handleClose, items) =>
  items.map(item => (
    <MenuItem
      key={item._id}
      onClick={handleClose}
      component={Link}
      to={item.url}
    >
      {item.title}
    </MenuItem>
  ));

class Menu extends React.PureComponent {
  public state = {
    anchorEl: null
  };

  public render() {
    const { anchorEl } = this.state;
    const { items } = this.props;
    return (
      <Wrapper>
        <Button
          color="inherit"
          aria-owns={anchorEl ? 'menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <Icon />
          <Label>Menu</Label>
        </Button>
        <CoreMenu
          id="menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          {buildItems(this.handleClose, items)}
        </CoreMenu>
      </Wrapper>
    );
  }

  private handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  private handleClose = () => {
    this.setState({ anchorEl: null });
  };
}

export { Menu };
