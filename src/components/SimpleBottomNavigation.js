import React, { useEffect } from 'react';

import {useHistory} from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

// Required Navigation Icons
import WhatshotIcon from '@material-ui/icons/Whatshot';
import TheatersIcon from '@material-ui/icons/Theaters';
import TvIcon from '@material-ui/icons/Tv';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    backgroundColor: "#2d313a",
    zIndex: 100
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useHistory();
  
  useEffect(() => {
    switch(value){
      case 0:
        history.push("/");
        break;
      case 1:
        history.push("/movies");
        break;
      case 2:
        history.push("/series");
        break;
      case 3:
        history.push("/search");
        break;
      default:
        break;
    }
  }, [value, history]);

  const navIconStyleObject = {
      color: "white"
  }

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction style={navIconStyleObject} label="Trending" icon={<WhatshotIcon/>} />
      <BottomNavigationAction style={navIconStyleObject} label="Movies" icon={<TheatersIcon />} />
      <BottomNavigationAction style={navIconStyleObject} label="Series" icon={<TvIcon />} />
      <BottomNavigationAction style={navIconStyleObject} label="Search" icon={<SearchIcon />} />
    </BottomNavigation>
  );
}