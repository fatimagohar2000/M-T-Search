import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Grid, Paper, SvgIconTypeMap } from "@material-ui/core";
import { useContext } from "react";
import { SearchContextProvider } from "../../context/SearchContext";
import { Genre } from "./Genre";
import { SearchBar } from "./SearchBar";
import { searchGenres } from "../../helpers/searchGenres";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      display: "flex",
      justifyContent: "center",
      paddingTop: "20px",
      paddingBottom: "20px",
    },
    gridItem: {
      display: "flex",
      justifyContent: "center",
    },
  })
);

interface genreType {
  name: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}

export const Input = () => {
  const classes = useStyles();
  const [, , , , , , , , , , genre, setGenre] = useContext(
    SearchContextProvider
  );

  return (
    <Paper className={classes.paper} elevation={0}>
      <Grid container alignItems="center" spacing={2}>
        <Grid item xs={12} className={classes.gridItem}>
          <SearchBar />
        </Grid>
        <Grid
          item
          xs={12}
          container
          spacing={0}
          justifyContent="center"
          alignItems="center"
        >
          {searchGenres.map((genreSearch: genreType, idx: number) => (
            <Grid
              item
              md={2}
              onClick={() => setGenre(genreSearch.name.toUpperCase())}
              key={`${idx}`}
            >
              <Genre
                name={genreSearch.name}
                Icon={genreSearch.icon}
                selected={genre === genreSearch.name.toUpperCase()}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Paper>
  );
};
