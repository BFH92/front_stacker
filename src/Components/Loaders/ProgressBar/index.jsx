import React from 'react';
import { createStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const BorderLinearProgress = withStyles(() =>
  createStyles({
    root: {
      height: 4,
      borderRadius: 2,
    },
    colorPrimary: {
      backgroundColor: 'rgb(189, 189, 189)',
    },
    bar: {
      borderRadius: 2,
      backgroundColor: 'rgb(92, 30, 226)',
    },
  }),
)(LinearProgress);

const ProgressBar = () => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <BorderLinearProgress variant="determinate" value={progress} />
    </div>
  );
}

export default ProgressBar;
