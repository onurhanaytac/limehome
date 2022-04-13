import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  button: {
    background: "#f7941d",
    color: "white",
    padding: ".75em 1.5em",
    fontWeight: "bold",
    cursor: "pointer",
    "&:hover": {
      opacity: "0.8",
    },
    "&:active": {
      opacity: "0.6",
    },
  },
  wide: {
    width: "100%",
  },
});

export default useStyles;
