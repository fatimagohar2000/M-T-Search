import { Avatar, Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useContext } from "react";
import { ThemeContextProvider } from "../theme/theme";

const useStyles = makeStyles({
  nameTxt: {
    fontWeight: 600,
  },
  descTxt: {
    fontWeight: 500,
  },
});

interface Props {
  name?: string;
  userName?: string;
  avatar?: string | undefined;
  content?: string;
}

export const Review = ({ name, userName, avatar, content }: Props) => {
  const classes = useStyles();
  const [isDark] = useContext(ThemeContextProvider);
  return (
    <Box
      overflow="auto"
      textOverflow="wrap"
      display="flex"
      p="20px"
      mr="10px"
      minWidth="200px"
      maxWidth="400px"
      height="200px"
      style={{
        background: isDark ? "#4d4d4d" : "whitesmoke",
        borderRadius: 25,
      }}
    >
      <Grid container>
        <Grid
          item
          xs={12}
          style={{ display: "flex", justifyContent: "flex-start" }}
        >
          <Avatar src={avatar} style={{ marginBottom: "10px" }} />
          <Box overflow="hidden" mt="0" m="10px">
            <Typography
              variant="body1"
              className={classes.nameTxt}
              color="textPrimary"
            >
              {name}
            </Typography>
            <Typography
              variant="body2"
              className={classes.descTxt}
              color="textSecondary"
            >
              {userName}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <Typography
              variant="body1"
              color="textPrimary"
              style={{ marginBottom: "5px" }}
            >
              {content}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
