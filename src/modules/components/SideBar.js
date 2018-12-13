import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import HomeIcon from '@material-ui/icons/Home';
import PoolIcon from '@material-ui/icons/Pool';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AppIcon from '@material-ui/icons/Apps';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import AssignmentIcon from '@material-ui/icons/Assignment';
import HelpIcon from '@material-ui/icons/Help';
import ContactSupportIcon from '@material-ui/icons/MailSharp';

const poolHash = "241110"
const minerCount = "2402"
const netHash = "21.4 Mhz"
const btcRate = "0.000004"

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class SideBar extends React.Component {
  state = {
    open: false,
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    const { classes } = this.props;

    return (
      <List
        component="nav"
        subheader={<ListSubheader component="div"></ListSubheader>}
        className={classes.root}
      >
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button onClick={this.handleClick}>
          <ListItemIcon>
            <PoolIcon />
          </ListItemIcon>
          <ListItemText primary="Pool" />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListSubheader>Hash {poolHash} </ListSubheader>
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListSubheader>Workers {minerCount}</ListSubheader>
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListSubheader>Nethash {netHash}</ListSubheader>
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListSubheader>Price {btcRate}</ListSubheader>
            </ListItem>
          </List>
      </Collapse>

      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <AppIcon />
        </ListItemIcon>
        <ListItemText primary="Blocks" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Miners" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Graphs" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <LocalAtmIcon />
        </ListItemIcon>
        <ListItemText primary="Calculator" />
      </ListItem>
    </List>
    );
  }
}

SideBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SideBar);
