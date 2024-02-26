import { makeStyles, SvgIconTypeMap, Typography } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import clsx from "clsx";
import { useContext } from "react";
import { ThemeContextProvider } from "../../theme/theme";

interface Props {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  name: string;
  color?: string;
  selected: boolean;
}

const useStyles = makeStyles({
  itemDiv: {
    display: "flex",
    height: "100%",
    padding: "15px",
    paddingBottom: "10px",
    cursor: "pointer",
    color: "gray",
    borderRadius: "10px",
    justifyContent: "center",
    marginLeft: "15px",
    marginRight: "15px",
  },
  name: {
    fontWeight: 600,
  },
  dark: {
    "&:hover": {
      backgroundColor: "#4d4d4d",
    },
  },
  light: {
    "&:hover": {
      backgroundColor: "whitesmoke",
    },
  },
});

export const Genre = ({ Icon, name, selected }: Props) => {
  const classes = useStyles();

  const [isDark] = useContext(ThemeContextProvider);

  return (
    <div
      className={clsx(classes.itemDiv, isDark ? classes.dark : classes.light)}
      style={{
        backgroundColor: selected ? (isDark ? "#4d4d4d" : "whitesmoke") : "",
      }}
    >
      <Icon
        style={{
          marginRight: "2px",
          height: "22px",
        }}
        color="primary"
      />
      <Typography variant="button" className={classes.name} color="textPrimary">
        {name}
      </Typography>
    </div>
  );
};
