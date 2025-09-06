import { makeStyles } from "@fluentui/react";
import { tokens } from "@fluentui/react-theme";

export const useLoginStyles = makeStyles({
    page_container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        // backgroundImage: `url(${background})`,
        backgroundColor: tokens.colorNeutralBackground4,
        backgroundSize: "cover",
    },
    login_content: {
        height: "410px",
        display: "flex",
        borderRadius: "6px",
        boxShadow: "0px 3px 12px 0px rgba(0, 0, 0, 0.10)",
        overflow: "hidden",
        position: "relative",
    },
    login_desc_block: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "340px",
        padding: tokens.spacingVerticalXXL,
        background: tokens.colorNeutralBackground2,
    },
    login_blok: {
        width: "340px",
        display: "flex",
        flexDirection: "column",
        padding: `${tokens.spacingVerticalXXL} ${tokens.spacingHorizontalXXXL}`,
        backgroundColor: tokens.colorNeutralBackground1,
        "@media screen and (max-width: 400px)": {
            paddingLeft: "6px",
            paddingRight: "6px",
        },
    },
    logo_container: {
        display: "flex",
        justifyContent: "center",
        widows: "100%",
    },
    logoin_block_logo: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        svg: {
            width: "48px",
            height: "48px",
        },
    },
    title: {
        margin: "4px 0",
        color: "var(--primery-green-color)"
    },

    version: {
        position: "absolute",
        bottom: "0",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        background: "inherit",
        color: tokens.colorNeutralBackground3Pressed,
        fontSize: "12px",
        paddingLeft: "10px",
        zIndex: "0",
        padding: "5px 0",
    },

    subtitle: {
        fontWeight: "400",
        lineHeight: "22px",
        textAlign: "center",
        color: tokens.colorNeutralForeground3,
        fontSize: "16px",
        fontStyle: "normal",
        padding: "0 20px",
        // fontWeight: tokens.fontWeightRegular,
    },
    login_forms: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
    },
    input_field: {
        height: "32px",
        padding: "5px 10px",
        width: "100%",
        background: "transparent",
        borderBottom: "2px solid var(--primery-green-color) !important",

        // "& ::after": {
        //     borderBottom: "2px solid var(--primery-green-color) !important"
        // }
    },
    eye_icon: {
        width: "20px",
        height: "20px",
    },
    login_forms_action: {
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        margin: `${tokens.spacingVerticalL} 0`,
    },
    forgot_pass: {
        alignSelf: "flex-end",
    },
    sms_timer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        gap: "4px",
        padding: "0 10px",
    },
    two_fa: {
        height: "100%",
        justifySelf: "flex-end",
        display: "flex",
        justifyContent: "center",
        gap: "8px",
        alignItems: "end",
    },
    back_icon: {
        position: "absolute",
        left: "20px",
        top: "30px",
        ":hover": {
            cursor: "pointer",
        },
    },
    otp_block: {
        display: "flex",
        justifyContent: "center",
    },
    confirmBtn: {
        width: "100%",
        backgroundColor: "var(--primery-green-color) !important",
        color: "#fff"
    }
});
