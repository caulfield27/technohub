import { makeStyles } from "@fluentui/react";
import { tokens } from "@fluentui/react-components";

export const useTableStyles = makeStyles({
    tableHeader: {
        background: tokens.colorNeutralBackground3,
        borderRadius: "8px",
        zIndex: "3",
        backgroundColor: tokens.colorNeutralBackground3,
        alignSself: "auto",
        textAlign: "center",
        insetBlockStart: "0",
        position: "sticky",
        top: "0",
        "@media screen and (max-width: 600px)": {
            border: "none",
            clip: "rect(0 0 0 0)",
            height: "1px",
            margin: "1px",
            overflow: "hidden",
            padding: "0",
            position: "absolute",
            width: "1px",
        },

        "th:last-child": {
            borderRadius: "0 10px 10px 0",
            paddingRight: "10px",
        },

        "th:first-child": {
            borderRadius: "10px 0 0 10px",
            paddingLeft: "10px",
        },

        th: {
            textAlign: "left",
            padding: "8px 6px 8px 8px",
            color: tokens.colorNeutralForeground4,
            fontWeight: 500,
            width: "100%",
        },
        tr: {
            border: "none !important",
            "@media screen and (max-width: 600px)": {
                display: "block",
                marginBottom: "0.625em",
            },
        },
    },

    tbody: {
        "@media screen and (max-width: 600px)": {
            tr: {
                border: "none",
                display: "block",
                padding: "8px",
                borderRadius: "8px",
                margin: "12px 0",
                background: tokens.colorNeutralBackground2Hover,
            },
            "tr:last-child": {
                // marginBottom: "12px",
            },
            td: {
                display: "flex",
                gap: "12px",
                alignItems: "baseline",
                justifyContent: "space-between",
                margin: "14px 0",
            },
            "td::first-child": {
                paddingLeft: "0",
                marginRight: "-10px",
            },
            "td::second-child": {
                paddingLeft: "0",
                marginRight: "-10px",
            },
            "td::before": {
                content: "attr(aria-label)",
                float: "left",
                fontWeight: "bold",
            },
            "td:last-child": {
                paddingRight: "0",
            },
        },
    },

    table_row: {
        ":hover": {
            background: `${tokens.colorNeutralBackground5} !important`,
        },
        ":active": {
            background: `${tokens.colorSubtleBackgroundHover} !important`,
        },
        "td:first-child": {
            paddingLeft: "10px",
            "@media screen and (max-width: 600px)": {
                marginRight: "-10px",
            },
        },
        "td:second-child": {
            "@media screen and (max-width: 600px)": {
                marginRight: "-10px",
            },
        },
        "td:last-child": {
            paddingRight: "10px",
        },
        "@media screen and (max-width: 600px)": {
            display: "flex",
            flexDirection: "column",
        },
    },

    headerCell_hover: {
        ":hover": {
            cursor: "pointer",
            background: tokens.colorNeutralBackground3Hover,
            borderRadius: "8px",
        },
    },

    tableHeaderCell: {},

    leftBorder: {
        borderLeft: `1px solid ${tokens.colorNeutralStroke2}`,
        width: "100%",
    },
    rightBorder: {
        borderRight: `1px solid ${tokens.colorNeutralStroke2}`,
        paddingRight: "10px",
        width: "100%",
    },
    chevron: {
        "@media screen and (max-width: 600px)": {
            display: "flex",
            justifyContent: "center",
        },
        ":hover": {
            cursor: "pointer",
            i: {
                opacity: "0.5",
            },
            svg: {
                opacity: "0.5",
            },
        },
    },

    expanded_row: {
        borderBottom: `1px solid ${tokens.colorNeutralStroke2} !important`,
        background: tokens.colorNeutralBackground2,
        // boxShadow: `0px 2px 5px rgba(0,0,0,0.12) inset !important`,
        overflowX: "auto",
        ":hover": {
            //   boxShadow: `0px 2px 15px rgba(0,0,0,0.12) inset !important`,
            background: tokens.colorNeutralBackground2Hover,
            //   transform: "scale(1) !important",
        },
    },

    empty_state_row: {
        border: "none !important",
        ":hover": {
            background: "none !important",
        },
    },
    empty_state: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "8px",
        paddingTop: "20px",
    },
    secondary_text: {
        textAlign: "center",
    },
    no_data_text: {
        display: "flex",
        justifyContent: "center",
        span: {
            color: tokens.colorNeutralForeground2,
            fontWeigth: tokens.fontSizeBase600,
        },
    },
    no_data_icon_container: {
        display: "flex",
        justifyContent: "center",
        padding: "12px 0",
    },
    table: {
        position: "relative",
        overflow: "auto",
        widows: "inherit",
    },
});
