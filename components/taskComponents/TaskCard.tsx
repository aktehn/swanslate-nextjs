import { Button, Card, Divider, TextField } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    margin: "3rem auto",
    padding: "2rem",
    display: "flex",
    width: "80%",
    flexDirection: "column",
  },
  cardContent: {
    fontSize: "1.25rem",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: "1.5rem",
    marginLeft: "2rem",
    fontSize: "1rem",
    flexBasis: "100px",
  },
}));

export default function TaskCard() {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.card} elevation={3}>
        <div className={classes.cardContent}>
          <strong>Item Id: </strong>
          <span>32156467964</span>
          <Divider orientation="vertical" />
          <strong>Time:</strong>
          <span>{new Date().toString()}</span>
          <p>
            <strong>Original Text: </strong>Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Fugiat atque ad ipsa maxime
            perferendis minima neque vero aliquid pariatur, nisi accusamus
            voluptatem ullam, sint eligendi provident sapiente dolor! Officia,
            ea.
          </p>
        </div>

        <Divider />
        <div style={{ marginTop: "1rem" }} className={classes.cardContent}>
          <strong>Language:</strong> <span>TURKISH</span>
        </div>
        <TextField margin="dense" multiline={true} variant="outlined" />
        <div className={classes.buttonContainer}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Save
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Submit
          </Button>
        </div>
      </Card>
    </>
  );
}
