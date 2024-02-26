import { makeStyles } from "@material-ui/styles";
import { Box, Typography } from "@material-ui/core";
import { Review } from "./Review";
import { ReviewType } from "./types";

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
  reviews: ReviewType[];
}

export const ReviewsRow = ({ reviews }: Props) => {
  const classes = useStyles();

  return (
    <Box mb="8px">
      <Typography
        variant="h6"
        component="h2"
        color="textPrimary"
        className={classes.title}
      >
        Reviews
      </Typography>
      <Box className={classes.posters}>
        {reviews.map((item: any, idx: number) => (
          <Review
            // avatar={`https://image.tmdb.org/t/p/original/${item?.author_details?.avatar_path}`}
            avatar={`${item?.author_details?.avatar_path}`}
            name={item.author || item?.author_details?.name}
            userName={item?.author_details?.username}
            content={item?.content}
            key={`${idx}`}
          />
        ))}
      </Box>
    </Box>
  );
};
