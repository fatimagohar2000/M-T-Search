import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import { useContext } from "react";
// import LazyLoad from "react-lazyload";
import { ThemeContextProvider } from "../theme/theme";

const useStyles = makeStyles({
  box: {
    borderRadius: 25,
    textAlign: "center",
  },
  img: {
    objectFit: "cover",
    width: "100%",
    height: "90px",
  },
  charName: {
    fontSize: "10px",
    fontWeight: 600,
  },
  name: {
    marginTop: "4px",
    fontSize: "12px",
    fontWeight: 600,
  },
});

interface Props {
  img: string;
  name: string | undefined;
  role: string;
}

export const CastPoster = ({ img, name, role }: Props) => {
  const classes = useStyles();

  const [isDark] = useContext(ThemeContextProvider);

  return (
    <Box
      overflow="hidden"
      textOverflow="wrap"
      height="150px"
      width="120px"
      className={classes.box}
      style={{ background: isDark ? "#4d4d4d" : "whitesmoke" }}
    >
      <Grid container spacing={0}>
        <Grid item xs={12}>
          {/* <LazyLoad height={120} offset={50}> */}
          <img
            src={img}
            alt="cast pic"
            className={classes.img}
            loading="lazy"
          />
          {/* </LazyLoad> */}
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="body1"
            className={classes.name}
            color="textPrimary"
          >
            {name}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="body2"
            className={classes.charName}
            color="textSecondary"
          >
            {role}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
