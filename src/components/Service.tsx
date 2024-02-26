import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useContext } from "react";
import { ThemeContextProvider } from "../theme/theme";

const useStyles = makeStyles(() => ({
  img: {
    objectFit: "cover",
    width: "100%",
    height: "90px",
  },
  name: {
    marginTop: "4px",
    fontSize: "12px",
    fontWeight: 600,
  },
  box: {
    borderRadius: 25,
    textAlign: "center",
  },
}));

interface Props {
  name?: string;
  img?: string;
}

export const Service = ({ name, img }: Props) => {
  const classes = useStyles();

  const [isDark] = useContext(ThemeContextProvider);

  return (
    <Box
      overflow="hidden"
      textOverflow="wrap"
      height="130px"
      width="120px"
      className={classes.box}
      style={{ background: isDark ? "#7a7a7a" : "#dbdbdb" }}
      mr="20px"
    >
      <Grid container>
        <Grid item xs={12}>
          <img
            src={img}
            alt="Streaming Service"
            className={classes.img}
            loading="lazy"
          />
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
      </Grid>
    </Box>
  );
};
