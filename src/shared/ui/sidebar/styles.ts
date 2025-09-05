import { makeStyles } from "@fluentui/react";
import { tokens } from "@fluentui/react-components";

export const useSidebarStyles = makeStyles({
  sidebar_container: {
    background: tokens.colorNeutralBackground3,
    padding: "0 28px",
    maxWidth: "300px",
    minHeight: "80vh",
    width: "230px",
    height: "100%",
    overflow: "auto",
    "::-webkit-scrollbar": {
      width: "0",
      height: "0",
    },
    "::-webkit-scrollbar-track": {
      display: "none",
    },
    "::-webkit-scrollbar-thumb": {
      backgroundColor: "transparent",
    },
    "@media screen and (max-width: 600px)": {
      display: "none",
    },
  },
  top_block: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    position: "absolute",
    top: "0",
    backgroundColor: tokens.colorNeutralBackground3,
    padding: "36px 0 15px 0",
    width: "238px",
    zIndex: "3",
  },
  title_row: {
    color: tokens.colorCompoundBrandForeground1,
    fontWeight: "700",
    fontSize: "24px",
    lineHeight: "28px",
    fontStyle: "normal",
    textAlign: "left",
  },
  menuList: {
    paddingTop: "125px",
    marginBottom: "50px",
  },
  search_container: {
    padding: "12px 0",
  },
  input_filed: {
    width: "100%",
    background: tokens.colorNeutralBackground5,
    borderBottom: "none",
  },
  menu_title: {
    color: tokens.colorNeutralForeground4,
    padding: "8px 0",
  },
  submenu_item: {
    display: "flex",
    alignItems: "center",
    marginLeft: "10px",
  },
  version: {
    display: "flex",
    justifyContent: "center",
    background: "inherit",
    width: "inherit",
    color: tokens.colorNeutralBackground3Pressed,
    fontSize: "12px",
  },

  bottom_block: {
    borderTop: `1px solid ${tokens.colorNeutralBackground5}`,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: "4px",
    background: tokens.colorNeutralBackground3,
    padding: "10px 5px",
    width: "235px",
    borderRadius: "8px",
    zIndex: "2",
    ":hover": {
      background: tokens.colorNeutralBackground3Hover,
      cursor: "pointer",
    },
  },
  user_info: {
    display: "flex",
    alignItems: "center",
  },
  user_details: {
    marginLeft: "10px",
  },
  floating_container: {
    position: "sticky",
    bottom: "60px",
    left: "0",
    padding: "8px",
    borderRadius: "12px",
    zIndex: "999",
    background: tokens.colorNeutralBackground1,
    width: "100%",
    gap: "8px",
    border: `2px solid ${tokens.colorNeutralBackground5}`,
  },
  menu_container: {},
  theme_container: {
    padding: "8px 0",
    borderBottom: `1px solid ${tokens.colorNeutralStroke1}`,
  },
  sign_out: {
    display: "flex",
    paddingTop: "8px",
    width: "100%",
    button: {
      width: "100%",
      display: "flex",
      justifyContent: "flex-start",
    },
  },
  sidebar_mobile: {
    // display: "none",
    "@media screen and (max-width: 600px)": {
      display: "block",
    },
  },
});
