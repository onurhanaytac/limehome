import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    width: "280px",
    height: "224px",
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    rowGap: "16px",
    background: "white",
    cursor: "pointer",
  },
  infoWrapper: {
    display: "flex",
    flex: 1,
    columnGap: "16px",
  },
  infoImg: { width: "120px" },
  info: {
    flex: 2,
    display: "flex",
    flexDirection: "column",
    rowGap: "14px",
    maxHeight: "166px",
    overflow: "hidden",
  },
  filler: { flex: 1 },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});

export default useStyles;
