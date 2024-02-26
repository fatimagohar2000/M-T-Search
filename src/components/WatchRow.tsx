import { makeStyles } from "@material-ui/styles";
import { Box, Typography } from "@material-ui/core";
import { Service } from "./Service";
import { useContext } from "react";
import { ThemeContextProvider } from "../theme/theme";
import { ServiceType } from "./types";

const useStyles = makeStyles(() => ({
  title: {
    paddingLeft: "20px",
    paddingTop: "10px",
  },

  posters: {
    display: "flex",
    padding: "20px",
    paddingTop: "5px",
    overflowY: "hidden",
    overflowX: "scroll",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
}));

interface Props {
  watchList: ServiceType[];
}

export const WatchRow = ({ watchList }: Props) => {
  const classes = useStyles();
  const [isDark] = useContext(ThemeContextProvider);

  return (
    <Box mb="8px">
      <Typography
        variant="h6"
        component="h2"
        color="textPrimary"
        className={classes.title}
        style={{ background: isDark ? "#4D4D4D" : "whitesmoke" }}
      >
        Stream Now
      </Typography>
      <Box
        className={classes.posters}
        style={{ background: isDark ? "#4D4D4D" : "whitesmoke" }}
      >
        {watchList.map((item: ServiceType, idx: number) => (
          <div key={`${idx}`}>
            <Service
              img={`https://image.tmdb.org/t/p/original/${item.logo_path}`}
              name={item.provider_name}
            />
          </div>
        ))}
      </Box>
    </Box>
  );
};
