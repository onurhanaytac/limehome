import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    background: "#ebeae6",
    padding: "16px",
    display: "flex",
    alignItems: "center",
    position: "absolute",
    top: "0",
    left: "0",
    zIndex: "1",
    width: "calc(100% - 32px)",
  },
});

export default useStyles;
