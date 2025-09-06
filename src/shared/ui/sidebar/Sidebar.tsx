import * as React from "react";
import {
    Avatar,
    NavDivider,
    NavDrawer,
    NavDrawerBody,
    NavDrawerFooter,
    NavDrawerHeader,
    Title3,
} from "@fluentui/react-components";

import {
    createPresenceComponent,
    makeStyles,
    motionTokens,
    tokens,
} from "@fluentui/react-components";


import { NavLink } from "react-router";
import { navLinks } from "../../data/NavLinks";
import { useGlobalStore } from "../../store/global.store";

const drawerMargin = tokens.spacingVerticalM;

const useStyles = makeStyles({
    root: {
        overflow: "hidden",
        minHeight: "100vh",
        position: "fixed",
        display: "flex",
        backgroundColor: tokens.colorNeutralBackground1,
    },
    title: {
        fontWeight: "600",
        color: "var(--primery-green-color)",
        margin: "10px 0"
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
            color: "var(--primery-green-color)"
        }
    },
    activeLink: {
        pointerEvents: "none",
        background: "white",
        color: "var(--primery-green-color) !important"
    },
    userWrapper: {
        width: "100%",
        backgroundColor: "white",
        padding: "8px",
        borderRadius: "4px",
        border: "1px solid #dcdcdc",
        display: "flex",
        flexDirection: "row",
        gap: "12px",
        justifyContent: "flex-start",
        alignItems: 'center'
    },

    profileInfo: {
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: "center",
    },

    nameSpan: {
        fontSize: "18px",
        fontWeight: "500",
        color: "black"
    },
    roleSpan: {
        fontSize: "14px",
        color: "grey"
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
    const { user } = useGlobalStore();

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
                    <Title3 className={styles.title}>Storage Admin</Title3>
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
                    {user && <div className={styles.userWrapper}>
                        <Avatar />
                        <div className={styles.profileInfo}>
                            <span className={styles.nameSpan}>{user.Username}</span>
                            <span className={styles.roleSpan}>{user.Role.Code}</span>
                        </div>
                    </div>}
                </NavDrawerFooter>
            </NavDrawer>
        </div>
    );
};
