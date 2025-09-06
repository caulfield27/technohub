import { makeStyles } from "@fluentui/react-components";

const useStyles = makeStyles({
  filterContainer: {
    marginTop: "16px",
    marginBottom: "16px",
  },
});

const useDrawerStyles = makeStyles({
  root: {
    minWidth: "400px",
  },
  toolbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "start",
  },
  drawerHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  drawerBody: {
    display: "flex",
    flexDirection: "column",
    marginTop: "16px",
    gap: "20px",
  },

  inputContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "2px",
  },
});

const useDropdownStyles = makeStyles({
  root: {
    display: "grid",
    gridTemplateRows: "repeat(1fr)",
    justifyItems: "start",
    gap: "2px",
    width: "100%",
  },

  dropdown: {
    width: "100%",
  },
});

export { useDrawerStyles, useStyles, useDropdownStyles };
