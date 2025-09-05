import * as React from "react";
import {
    AppItem,
    NavDivider,
    NavDrawer,
    NavDrawerBody,
    NavDrawerFooter,
    NavDrawerHeader,
} from "@fluentui/react-components";

import {
    createPresenceComponent,
    makeStyles,
    motionTokens,
    tokens,
} from "@fluentui/react-components";


import { NavLink } from "react-router";
import { navLinks } from "../../data/NavLinks";

const drawerWidth = "350px";
const drawerMargin = tokens.spacingVerticalM;

const useStyles = makeStyles({
    root: {
        overflow: "hidden",
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        backgroundColor: tokens.colorNeutralBackground1,
    },
    title: {
        fontWeight: "600",
        color: "#06923E",
    },
    nav: {
        minWidth: "200px",
        width: drawerWidth,
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
    },

    navContainer: {
        display: "flex",
        flexDirection: "column",
        gap: "8px"
    },
    linkItem: {
        display: "flex",
        flexDirection: "row",
        gap: "8px",
        justifyContent: 'flex-start',
        alignItems: 'center',
        textDecoration: "none",
        color: "#171717",
        padding: "8px 8px 8px 16px",
        borderRadius: "6px",
        transition: "0.3s linear",
        ":hover": {
            backgroundColor: "white",
            color: "#06923E"
        }
    },
    activeLink: {
        pointerEvents: "none",
        background: "white",
        color: "#06923E !important"
    },
    userWrapper: {
        width: "100%",
        backgroundColor: "white",
        padding: "12px 10px",
        borderRadius: "4px"
    }
});


const DrawerMotion = createPresenceComponent(() => {
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

export const Sidebar = (): React.ReactElement => {
    const styles = useStyles();

    return (
        <div className={styles.root}>
            <NavDrawer
                defaultSelectedValue="2"
                defaultSelectedCategoryValue=""
                open={true}
                type={'inline'}
                multiple={false}
                surfaceMotion={{ children: (_, props) => <DrawerMotion {...props} /> }}
                className={styles.nav}
            >
                <NavDrawerHeader>
                    <AppItem className={styles.title}>
                        Админ панель
                    </AppItem>
                </NavDrawerHeader>
                <NavDivider />
                <NavDrawerBody className={styles.body}>
                    <nav className={styles.navContainer}>
                        {navLinks.map((link) =>
                            <NavLink
                                className={({ isActive }) => isActive ? `${styles.linkItem} ${styles.activeLink}` : styles.linkItem}
                                to={link.path}
                                key={link.path}>
                                {link.icon}
                                <span>
                                    {link.label}
                                </span>
                            </NavLink>)}

                    </nav>
                </NavDrawerBody>
                <NavDrawerFooter className={styles.footerWrapper}>
                    <div className={styles.userWrapper}>
                        <span>User</span>
                    </div>
                </NavDrawerFooter>
            </NavDrawer>
        </div>
    );
};
