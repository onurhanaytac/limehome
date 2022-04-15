import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    display: "flex",
    overflow: "auto",
    gap: "8px",
    position: "absolute",
    bottom: "0",
    left: "0",
    zIndex: "1",
    width: "100%",
    padding: "8px",
    boxSizing: "border-box",
    scrollSnapType: "y",
  },
  card: {
    scrollSnapAlign: "start",
  },
  active: {
    background: "#ebeae6",
  },
});

export default useStyles;
