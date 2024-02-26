import CircularProgress, {
  CircularProgressProps,
} from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  div: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    fontWeight: 700,
  },
});

interface Props {
  circleProps?: CircularProgressProps;
  progress: number;
  value: number;
}

const CircularProgressWithLabel = ({ circleProps, progress, value }: Props) => {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress
        variant="determinate"
        {...circleProps}
        value={progress}
      />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          variant="caption"
          component="div"
          color="textSecondary"
        >{`${value}`}</Typography>
      </Box>
    </Box>
  );
};

interface RankingProps {
  name: string;
  value: number;
  progress: number;
}

export const Ranking = ({ name, progress, value }: RankingProps) => {
  const classes = useStyles();
  return (
    <div className={classes.div}>
      <Typography variant="body1" className={classes.name} color="textPrimary">
        {name}
      </Typography>
      <CircularProgressWithLabel progress={progress} value={value} />
    </div>
  );
};
