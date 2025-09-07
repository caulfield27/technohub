import * as React from "react";
import {
    Avatar,
    Body1Strong,
    Button,
    NavDivider,
    NavDrawer,
    NavDrawerBody,
    NavDrawerFooter,
    NavDrawerHeader,
    Title3,
} from "@fluentui/react-components";

import { NavLink, useNavigate } from "react-router";
import { DrawerMotion, useStyles } from "./styles";
import { useGlobalStore } from "../../store/global.store";
import { usePermittedLinks } from "@/shared/hooks/usePermittedLinks";
import { SignOut20Regular } from "@fluentui/react-icons";
import { logout } from "@/shared/api/api.config";
import Logo from "../logo/Logo";

export const Sidebar = (): React.ReactElement => {
    const styles = useStyles();
    const navigate = useNavigate();
    const { user } = useGlobalStore();
    const navLinks = usePermittedLinks(user);
    const [open, setOpen] = React.useState(false);

    return (
        <div className={styles.root}>
            <NavDrawer
                defaultSelectedValue="2"
                defaultSelectedCategoryValue=""
                open={true}
                type={"inline"}
                multiple={false}
                surfaceMotion={{ children: (_, props) => <DrawerMotion {...props} /> }}
                className={styles.nav}
            >
                <NavDrawerHeader className={styles.header}>
                    <Logo onLogoClick={() => {
                        navigate("/");
                    }} />
                    {/* <Title3 className={styles.title}>Storage admin</Title3> */}
                </NavDrawerHeader>
                <NavDivider />
                <NavDrawerBody className={styles.body}>
                    <nav className={styles.navContainer}>
                        {navLinks.map((link) => (
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? `${styles.linkItem} ${styles.activeLink}`
                                        : styles.linkItem
                                }
                                to={link.path}
                                key={link.path}
                            >
                                {link.icon}
                                <span>{link.label}</span>
                            </NavLink>
                        ))}
                    </nav>
                </NavDrawerBody>
                <NavDrawerFooter className={styles.footerWrapper}>
                    {user && <div
                        className={styles.userWrapper}
                        onClick={() => setOpen((prev) => !prev)}
                    >
                        <Avatar />
                        <div className={styles.profileInfo}>
                            <span className={styles.nameSpan}>{user.Username}</span>
                            <span className={styles.roleSpan}>{user.Role.Code}</span>
                        </div>
                    </div>}
                </NavDrawerFooter>
                {open && (
                    <div className={styles.floating_container}>
                        <div className={styles.sign_out}>
                            <Button
                                icon={<SignOut20Regular />}
                                iconPosition="before"
                                appearance="subtle"
                                style={{ width: '100%', }}
                                onClick={logout}
                            >
                                <Body1Strong>Выход</Body1Strong>
                            </Button>
                        </div>
                        <div className={styles.version}>v:1.0.30</div>
                    </div>
                )}
            </NavDrawer>

        </div>
    );
};
