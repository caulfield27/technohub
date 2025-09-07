import {
  createPresenceComponent,
  makeStyles,
  motionTokens,
  tokens,
} from "@fluentui/react-components";

export const useStyles = makeStyles({
  root: {
    overflow: "hidden",
    minHeight: "100vh",
    position: "fixed",
    display: "flex",
    backgroundColor: tokens.colorNeutralBackground1,
  },
  title: {
    cursor: "pointer",
    fontWeight: "600",
    color: "var(--primery-green-color)",
    margin: "10px 0",
  },
  nav: {
    minWidth: "200px",
    width: "var(--sidebar-width)",
  },
  content: {
    flex: "1",
    padding: "16px",
    display: "grid",
    justifyContent: "flex-start",
    alignItems: "flex-start",

    margin: 0,
    gap: tokens.spacingVerticalM,
    gridAutoRows: "max-content",
    boxSizing: "border-box",
    position: "absolute",
    inset: 0,
  },
  body: {
    padding: "16px 8px",
  },
  field: {
    display: "flex",
    marginTop: "4px",
    marginLeft: "8px",
    flexDirection: "column",
    gridRowGap: tokens.spacingVerticalS,
  },
  footerWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "16px",
    position: 'fixed',
    bottom: '-6px'
  },

  navContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  linkItem: {
    display: "flex",
    flexDirection: "row",
    gap: "8px",
    justifyContent: "flex-start",
    alignItems: "center",
    textDecoration: "none",
    color: "#171717",
    padding: "8px 8px 8px 16px",
    borderRadius: "6px",
    transition: "0.3s linear",
    ":hover": {
      backgroundColor: "white",
      color: "var(--primery-green-color)",
    },
  },
  activeLink: {
    pointerEvents: "none",
    background: "white",
    color: "var(--primery-green-color) !important",
  },
  userWrapper: {
    cursor: "pointer",
    width: "100%",
    backgroundColor: "white",
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #dcdcdc",
    display: "flex",
    flexDirection: "row",
    gap: "12px",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  profileInfo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  nameSpan: {
    fontSize: "18px",
    fontWeight: "500",
    color: "black",
  },
  roleSpan: {
    fontSize: "14px",
    color: "grey",
  },
  floating_container: {
    position: "sticky",
    bottom: "70px",
    left: "10px",
    right: '10px',
    padding: "8px",
    borderRadius: "12px",
    zIndex: "999",
    background: tokens.colorNeutralBackground1,
    width: "92%",
    gap: "8px",
    border: `2px solid ${tokens.colorNeutralBackground5}`,
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
  version: {
    display: "flex",
    justifyContent: "center",
    background: "inherit",
    width: "inherit",
    color: tokens.colorNeutralBackground3Pressed,
    fontSize: "12px",
  },
});

export const DrawerMotion = createPresenceComponent(() => {
  const drawerMargin = tokens.spacingVerticalM;
  const keyframes = [
    {
      opacity: 0,
      margin: 0,
      backgroundColor: "#F5F5F5",
      borderColor: tokens.colorNeutralBackground1,
      borderRadius: 0,
    },
    {
      opacity: 1,
      transform: "translate3D(0, 0, 0)",
      margin: drawerMargin,
      borderColor: "#F5F5F5",
      borderRadius: tokens.borderRadiusXLarge,
    },
  ];

  return {
    enter: {
      keyframes,
      duration: motionTokens.durationNormal,
      easing: motionTokens.curveDecelerateMin,
    },
    exit: {
      keyframes: [...keyframes].reverse(),
      duration: motionTokens.durationSlow,
      easing: motionTokens.curveAccelerateMin,
    },
  };
});
