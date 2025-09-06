import { type IStyle } from "@fluentui/react";
import { tokens } from "@fluentui/react-components";

export const summa: IStyle = {
    color: tokens.colorNeutralForeground1,
    fontWeight: `${tokens.fontWeightBold} !important`,
    textAlign: "end",
};

export const link_color: IStyle = {
    color: tokens.colorBrandForegroundLink,
    padding: "0",
    fontWeight: tokens.fontSizeBase500,
    ":hover": {
        cursor: "pointer",
        textDecorationLine: "underline",
    },
};

export const input_container: IStyle = {
    margin: `${tokens.spacingVerticalM} 0`,
    label: {
        margin: "3px 0",
        display: "block",
    },
};

export const drawer_background: IStyle = {
    background: `${tokens.colorNeutralBackground3} !important`,
};

export const drawer_footer: IStyle = {
    display: "flex",
    width: "-webkit-fill-available",
    justifyContent: "space-between !important",
    borderTop: `1px solid ${tokens.colorNeutralStroke1}`,
    button: {
        padding: "5px 12px",
        flex: "1 0 0",
    },
};

export const dialog_footer: IStyle = {
    background: tokens.colorNeutralBackground3,
    marginTop: "25px",
    marginLeft: "-25px",
    marginBottom: "-25px",
    marginRight: "-25px",
    padding: "10px 20px",
    borderBottomLeftRadius: "8px",
    borderBottomRightRadius: "8px",
    borderTop: `1px solid ${tokens.colorNeutralBackground3Hover}`,
    display: "flex",
    justifyContent: "end",
};

export const page_title: IStyle = {
    display: "flex",
    flexDirection: "column",
    padding: "12px 0 24px 0",
};

export const table_footer: IStyle = {
    position: "sticky",
    bottom: "0px",
    zIndex: "5",
    border: "none",
    borderBottom: `2px solid ${tokens.colorNeutralBackground3}`,
    tbody: {
        tr: {
            "td:second-child": {
                marginLeft: "12px",
            },
        },
    },
    td: {
        background: tokens.colorNeutralBackground3,
        borderRadius: "8px",
    },
};

export const flex_row_table: IStyle = {
    display: "flex",
    justifyContent: "end",
    gap: "20px",
};

export const page_conatiner: IStyle = {
    position: "relative",
    minHeight: "100vh",
    height: "100%",
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
};

export const action_popover_container: IStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    alignItems: "baseline",
    button: {
        width: "100%",
        justifyContent: "start",
    },
};

export const filter_container: IStyle = {
    padding: "12px 0px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    width: "100%",
    justifyContent: "end",
    borderTop: `1px solid ${tokens.colorNeutralStroke1}`,
};

export const expanded_row: IStyle = {
    userSelect: "none",
    borderBottom: `1px solid ${tokens.colorNeutralStroke2} !important`,
    background: tokens.colorNeutralBackground2,
    // boxShadow: `0px 2px 5px rgba(0,0,0,0.12) inset !important`,
    overflowX: "auto",
    ":hover": {
        //   boxShadow: `0px 2px 15px rgba(0,0,0,0.12) inset !important`,
        background: tokens.colorNeutralBackground2Hover,
        //   transform: "scale(1) !important",
    },
};
