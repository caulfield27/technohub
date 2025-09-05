// import {
//   AppItem,
//   Hamburger,
//   NavCategory,
//   NavCategoryItem,
//   NavDivider,
//   NavDrawer,
//   NavDrawerBody,
//   NavItem,
//   NavSectionHeader,
//   NavSubItem,
//   NavSubItemGroup,
// } from "@fluentui/react-components";

// import {
//   Label,
//   Radio,
//   RadioGroup,
//   Switch,
//   Tooltip,
// } from "@fluentui/react-components";
// import {
//   PersonCircle32Regular,
//   SearchIcon
// } from "@fluentui/react-icons";

// export const Sidebar = () => {
//     return (
//     <div>
//       <NavDrawer
//         defaultSelectedValue="2"
//         defaultSelectedCategoryValue=""
//         open={true}
//         multiple={false}
//         onOpenChange={() => {}}
//       >
//         <NavDrawerBody>
//           <AppItem
//             icon={<PersonCircle32Regular />}
//             as="a"
//             href={""}
//           >
//             Contoso HR
//           </AppItem>
//           <NavItem href={""} icon={<PersonCircle32Regular />} value="1">
//             Dashboard
//           </NavItem>
//           <NavItem href={""} icon={<PersonCircle32Regular />} value="2">
//             Announcements
//           </NavItem>
//           <NavItem
//             href={""}
//             icon={<PersonCircle32Regular />}
//             value="3"
//           >
//             Employee Spotlight
//           </NavItem>
//           <NavItem icon={<SearchIcon />} href={""} value="4">
//             Profile Search
//           </NavItem>
//           <NavItem
//             icon={<PersonCircle32Regular />}
//             href={""}
//             value="5"
//           >
//             Performance Reviews
//           </NavItem>
//           <NavSectionHeader>Employee Management</NavSectionHeader>
//           <NavCategory value="6">
//             <NavCategoryItem icon={<JobPostings />}>
//               Job Postings
//             </NavCategoryItem>
//             <NavSubItemGroup>
//               <NavSubItem href={linkDestination} value="7">
//                 Openings
//               </NavSubItem>
//               <NavSubItem href={linkDestination} value="8">
//                 Submissions
//               </NavSubItem>
//             </NavSubItemGroup>
//           </NavCategory>
//           <NavItem icon={<Interviews />} value="9">
//             Interviews
//           </NavItem>

//           <NavSectionHeader>Benefits</NavSectionHeader>
//           <NavItem icon={<HealthPlans />} value="10">
//             Health Plans
//           </NavItem>
//           <NavCategory value="11">
//             <NavCategoryItem icon={<Person />} value="12">
//               Retirement
//             </NavCategoryItem>
//             <NavSubItemGroup>
//               <NavSubItem href={linkDestination} value="13">
//                 Plan Information
//               </NavSubItem>
//               <NavSubItem href={linkDestination} value="14">
//                 Fund Performance
//               </NavSubItem>
//             </NavSubItemGroup>
//           </NavCategory>

//           <NavSectionHeader>Learning</NavSectionHeader>
//           <NavItem icon={<TrainingPrograms />} value="15">
//             Training Programs
//           </NavItem>
//           <NavCategory value="16">
//             <NavCategoryItem icon={<CareerDevelopment />}>
//               Career Development
//             </NavCategoryItem>
//             <NavSubItemGroup>
//               <NavSubItem href={linkDestination} value="17">
//                 Career Paths
//               </NavSubItem>
//               <NavSubItem href={linkDestination} value="18">
//                 Planning
//               </NavSubItem>
//             </NavSubItemGroup>
//           </NavCategory>
//           <NavDivider />
//           <NavItem target="_blank" icon={<Analytics />} value="19">
//             Workforce Data
//           </NavItem>
//           <NavItem href={linkDestination} icon={<Reports />} value="20">
//             Reports
//           </NavItem>
//         </NavDrawerBody>
//       </NavDrawer>

//       <ContentMotion visible={isOpen}>
//         <div className={styles.content}>
//           <Tooltip content="Toggle navigation pane" relationship="label">
//             <Hamburger
//               onClick={() => setIsOpen(!isOpen)}
//               {...restoreFocusTargetAttributes}
//               aria-expanded={isOpen}
//             />
//           </Tooltip>

//           <div className={styles.field}>
//             <Label id={typeLableId}>Type</Label>
//             <RadioGroup
//               value={type}
//               onChange={(_, data) => setType(data.value as DrawerType)}
//               aria-labelledby={typeLableId}
//             >
//               <Radio value="overlay" label="Overlay (Default)" />
//               <Radio value="inline" label="Inline" />
//             </RadioGroup>
//             <Label id={linkLabelId}>Links</Label>
//             <Switch
//               checked={enabledLinks}
//               onChange={(_, data) => setEnabledLinks(!!data.checked)}
//               label={enabledLinks ? "Enabled" : "Disabled"}
//               aria-labelledby={linkLabelId}
//             />

//             <Label id={multipleLabelId}>
//               Allow multiple expanded categories
//             </Label>
//             <Switch
//               checked={isMultiple}
//               onChange={(_, data) => setIsMultiple(!!data.checked)}
//               label={isMultiple ? "Multiple" : "Single"}
//               aria-labelledby={multipleLabelId}
//             />
//           </div>
//         </div>
//       </ContentMotion>
//     </div>
// }
