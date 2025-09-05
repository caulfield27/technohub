import type { DrawerProps } from "@fluentui/react-components";
import * as React from "react";
import {
    AppItem,
    NavCategory,
    NavCategoryItem,
    NavDivider,
    NavDrawer,
    NavDrawerBody,
    NavDrawerFooter,
    NavDrawerHeader,
    NavItem,
    NavSectionHeader,
    NavSubItem,
    NavSubItemGroup,
} from "@fluentui/react-components";

import {
    createPresenceComponent,
    makeStyles,
    motionTokens,
    tokens,
    useRestoreFocusTarget,
} from "@fluentui/react-components";
import {
    Board20Filled,
    Board20Regular,
    BoxMultiple20Filled,
    BoxMultiple20Regular,
    DataArea20Filled,
    DataArea20Regular,
    DocumentBulletListMultiple20Filled,
    DocumentBulletListMultiple20Regular,
    HeartPulse20Filled,
    HeartPulse20Regular,
    MegaphoneLoud20Filled,
    MegaphoneLoud20Regular,
    NotePin20Filled,
    NotePin20Regular,
    People20Filled,
    People20Regular,
    PeopleStar20Filled,
    PeopleStar20Regular,
    Person20Filled,
    PersonLightbulb20Filled,
    PersonLightbulb20Regular,
    Person20Regular,
    PersonSearch20Filled,
    PersonSearch20Regular,
    PreviewLink20Filled,
    PreviewLink20Regular,
    bundleIcon,
    PersonCircle32Regular,
} from "@fluentui/react-icons";
import { NavLink } from "react-router";

const drawerWidth = "260px";
const drawerMargin = tokens.spacingVerticalM;

const useStyles = makeStyles({
    root: {
        overflow: "hidden",
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        backgroundColor: tokens.colorNeutralBackground1,
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
        padding: "16px"
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
        padding: "16px"
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

/*
 * Create a custom ContentMotion component that animates the content element.
 */


const Person = bundleIcon(Person20Filled, Person20Regular);
const JobPostings = bundleIcon(NotePin20Filled, NotePin20Regular);
const Interviews = bundleIcon(People20Filled, People20Regular);
const HealthPlans = bundleIcon(HeartPulse20Filled, HeartPulse20Regular);
const Analytics = bundleIcon(DataArea20Filled, DataArea20Regular);
const Reports = bundleIcon(
    DocumentBulletListMultiple20Filled,
    DocumentBulletListMultiple20Regular
);

type DrawerType = Required<DrawerProps>["type"];

export const Sidebar = (): React.ReactElement => {
    const styles = useStyles();

    return (
        <div className={styles.root}>
            <NavDrawer
                defaultSelectedValue="2"
                defaultSelectedCategoryValue=""
                open={true}
                type="inline"
                multiple={false}
                surfaceMotion={{ children: (_, props) => <DrawerMotion {...props} /> }}
                className={styles.nav}
            >
                <NavDrawerHeader>
                    <AppItem>
                        Админ панель
                    </AppItem>
                </NavDrawerHeader>
                {/* <NavDrawerBody className={styles.body}>
                    <NavItem value="1" as="a" href="/statistics">Статистика</NavItem>
                </NavDrawerBody> */}
                <NavDrawerBody className={styles.body}>
                    <NavItem as="a" href={"/statistics"} icon={<JobPostings />} value="1">
                        Статистика
                    </NavItem>
                    <NavItem  as="a" href={"/"} icon={<Interviews />} value="2">
                        Announcements
                    </NavItem>
                </NavDrawerBody>
                    {/* <NavItem
            href={linkDestination}
            icon={<EmployeeSpotlight />}
            value="3"
          >
            Employee Spotlight
          </NavItem>
          <NavItem icon={<Search />} href={linkDestination} value="4">
            Profile Search
          </NavItem>
          <NavItem
            icon={<PerformanceReviews />}
            href={linkDestination}
            value="5"
          >
            Performance Reviews
          </NavItem> */}
                    {/* <NavSectionHeader>Employee Management</NavSectionHeader>
                    <NavCategory value="6">
                        <NavCategoryItem icon={<JobPostings />}>
                            Job Postings
                        </NavCategoryItem>
                        <NavSubItemGroup>
                            <NavSubItem href={linkDestination} value="7">
                                Openings
                            </NavSubItem>
                            <NavSubItem href={linkDestination} value="8">
                                Submissions
                            </NavSubItem>
                        </NavSubItemGroup>
                    </NavCategory>
                    <NavItem icon={<Interviews />} value="9">
                        Interviews
                    </NavItem>

                    <NavSectionHeader>Benefits</NavSectionHeader>
                    <NavItem icon={<HealthPlans />} value="10">
                        Health Plans
                    </NavItem>
                    <NavCategory value="11">
                        <NavCategoryItem icon={<Person />} value="12">
                            Retirement
                        </NavCategoryItem>
                        <NavSubItemGroup>
                            <NavSubItem href={linkDestination} value="13">
                                Plan Information
                            </NavSubItem>
                            <NavSubItem href={linkDestination} value="14">
                                Fund Performance
                            </NavSubItem>
                        </NavSubItemGroup>
                    </NavCategory> */}

                    {/* <NavSectionHeader>Learning</NavSectionHeader>
          <NavItem icon={<TrainingPrograms />} value="15">
            Training Programs
          </NavItem>
          <NavCategory value="16">
            <NavCategoryItem icon={<CareerDevelopment />}>
              Career Development
            </NavCategoryItem>
            <NavSubItemGroup>
              <NavSubItem href={linkDestination} value="17">
                Career Paths
              </NavSubItem>
              <NavSubItem href={linkDestination} value="18">
                Planning
              </NavSubItem>
            </NavSubItemGroup>
          </NavCategory> */}
                    {/* <NavDivider />
                    <NavItem target="_blank" icon={<Analytics />} value="19">
                        Workforce Data
                    </NavItem>
                    <NavItem href={linkDestination} icon={<Reports />} value="20">
                        Reports
                    </NavItem>
                </NavDrawerBody> */}
                <NavDrawerFooter className={styles.footerWrapper}>
                    <div className={styles.userWrapper}>
                        <span>User</span>
                    </div>
                </NavDrawerFooter>
            </NavDrawer>
        </div>
    );
};
