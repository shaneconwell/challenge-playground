import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  square: {
    background: theme.palette.primary.main,
    color: theme.palette.text.primary,
    border: "1px solid #999",
    float: "left",
    fontSize: "24px",
    fontWeight: "bold",
    lineHeight: "34px",
    height: "100px",
    marginRight: "-1px",
    marginTop: "-1px",
    padding: 0,
    textAlign: "center",
    width: "100px",
    "&:hover": {
      background: theme.palette.background.secondary,
    },
  },
}));
export default function Square(props) {
  const classes = useStyles();
    return (
      <button className={classes.square} onClick={props.onClick}>
        {props.value}
      </button>
    );
  }