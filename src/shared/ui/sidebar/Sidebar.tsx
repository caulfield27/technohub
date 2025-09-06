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

import { NavLink } from "react-router";
import { navLinks } from "../../data/NavLinks";
import { DrawerMotion, useStyles } from "./styles";

export const Sidebar = (): React.ReactElement => {
  const styles = useStyles();

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
        <NavDrawerHeader>
          <Title3 className={styles.title}>STORAGE</Title3>
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
          <div className={styles.userWrapper}>
            <Avatar />
            <div className={styles.profileInfo}>
              <span className={styles.nameSpan}>Alisher</span>
              <span className={styles.roleSpan}>admin</span>
            </div>
          </div>
        </NavDrawerFooter>
      </NavDrawer>
    </div>
  );
};
