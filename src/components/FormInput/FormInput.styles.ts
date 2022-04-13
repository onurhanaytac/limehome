import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {},
  label: {
    fontSize: "14px",
  },
  input: {
    padding: "8px 0",
    fontSize: "16px",
    borderBottom: `3px solid #f7941d`,
  },
  error: {
    color: "red",
    fontSize: "13px",
    fonWeight: "bold",
  },
});

export default useStyles;
