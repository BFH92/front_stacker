import React from 'react';
import { makeStyles, createStyles} from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStylesFacebook = makeStyles(() =>
  createStyles({
    root: {
      position: 'relative',
    },
    bottom: {
      color: 'rgb(246, 247, 254)',
    },
    top: {
      color: 'rgb(92, 30, 226)',
      animationDuration: '950ms',
      position: 'absolute',
      left: 0,
    },
    circle: {
      strokeLinecap: 'round',
    },
  }),
);

function FacebookCircularProgress() {
  const classes = useStylesFacebook();

  return (
    <div className={classes.root}>
      <CircularProgress
        variant="determinate"
        className={classes.bottom}
        size={40}
        thickness={4}
        value={100}
      />
      <CircularProgress
        variant="indeterminate"
        disableShrink
        className={classes.top}
        classes={{
          circle: classes.circle,
        }}
        size={40}
        thickness={4}
      />
    </div>
  );
}

const ProgressCircle = () => {

  return (
    <div>
      <FacebookCircularProgress />
    </div>
  );
}

export default ProgressCircle;
