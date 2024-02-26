import React, { useContext } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Box, Switch } from "@material-ui/core";
import { ThemeContextProvider } from "../theme/theme";
import { Brightness7Sharp } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      fontWeight: 800,
      padding: "10px",
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
    },
  })
);

export const Header = () => {
  const classes = useStyles();

  const [isDark, setIsDark] = useContext(ThemeContextProvider);

  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0}>
        <Toolbar variant="dense" className={classes.toolbar}>
          <Typography variant="h6" color="inherit" className={classes.title}>
            M&T Search
          </Typography>
          <Box display="flex" alignItems="center">
            <Brightness7Sharp style={{ color: isDark ? "yellow" : "white" }} />
            <Switch
              checked={isDark}
              onChange={() => setIsDark((isDark: boolean) => !isDark)}
              color="secondary"
            />
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};
