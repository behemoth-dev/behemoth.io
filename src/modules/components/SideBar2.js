import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TimerIcon from '@material-ui/icons/Timer';
import SettingsIcon from '@material-ui/icons/Settings';
import PhonelinkSetupIcon from '@material-ui/icons/PhonelinkSetup';
import HomeIcon from '@material-ui/icons/Home';
import PoolIcon from '@material-ui/icons/Pool';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AppIcon from '@material-ui/icons/Apps';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';

const categories = [
  {
    id: 'Develop',
    children: [
      { id: 'Home', icon: <HomeIcon />, active: true },
      { id: 'Pool', icon: <PoolIcon /> },
      { id: 'Dashboard', icon: <DashboardIcon /> },
      { id: 'Blocks', icon: <AppIcon /> },
      { id: 'Graphs', icon: <PeopleIcon /> },
      { id: 'Calculator', icon: <LocalAtmIcon /> },
    ],
  },
  {
    id: 'Quality',
    children: [
      { id: 'Analytics', icon: <SettingsIcon /> },
      { id: 'Performance', icon: <TimerIcon /> },
      { id: 'Test Lab', icon: <PhonelinkSetupIcon /> },
    ],
  },
];

const styles = theme => ({
    categoryHeader: {
      paddingTop: 16,
      paddingBottom: 16,
    },
    categoryHeaderPrimary: {
      color: theme.palette.common.white,
    },
    item: {
      paddingTop: 4,
      paddingBottom: 4,
      color: 'rgba(255, 255, 255, 0.7)',
    },
    itemCategory: {
      backgroundColor: '#232f3e',
      boxShadow: '0 -1px 0 #404854 inset',
      paddingTop: 16,
      paddingBottom: 16,
    },
    firebase: {
      fontSize: 24,
      fontFamily: theme.typography.fontFamily,
      color: theme.palette.common.white,
    },
    itemActionable: {
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
      },
    },
    itemActiveItem: {
      color: '#4fc3f7',
    },
    itemPrimary: {
      color: 'inherit',
      fontSize: theme.typography.fontSize,
      '&$textDense': {
        fontSize: theme.typography.fontSize,
      },
    },
    textDense: {},
    divider: {
      marginTop: theme.spacing.unit * 2,
    },
  });
  
  function SideBar2(props) {
    const { classes, ...other } = props;
  
    return (
      <Drawer variant="permanent" {...other}>
        <List disablePadding>
          <ListItem className={classNames(classes.firebase, classes.item, classes.itemCategory)}>
            Paperbase
          </ListItem>
          <ListItem className={classNames(classes.item, classes.itemCategory)}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText
              classes={{
                primary: classes.itemPrimary,
              }}
            >
              Project Overview
            </ListItemText>
          </ListItem>
          {categories.map(({ id, children }) => (
            <React.Fragment key={id}>
              <ListItem className={classes.categoryHeader}>
                <ListItemText
                  classes={{
                    primary: classes.categoryHeaderPrimary,
                  }}
                >
                  {id}
                </ListItemText>
              </ListItem>
              {children.map(({ id: childId, icon, active }) => (
                <ListItem
                  button
                  dense
                  key={childId}
                  className={classNames(
                    classes.item,
                    classes.itemActionable,
                    active && classes.itemActiveItem,
                  )}
                >
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.itemPrimary,
                      textDense: classes.textDense,
                    }}
                  >
                    {childId}
                  </ListItemText>
                </ListItem>
              ))}
              <Divider className={classes.divider} />
            </React.Fragment>
          ))}
        </List>
      </Drawer>
    );
  }
  
  SideBar2.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(SideBar2);