import { makeStyles } from "@fluentui/react";

export const useUserstyles = makeStyles({
  // search_container: {
  //     marginBottom: '22px'

  // },
  input_filed: {
    width: "280px",
    height: "42px",
  },
  filter_container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "22px",
  },
  add_btn: {
    width: "128px",
    height: "35px",
  },
  tablist_container: {
    marginBottom: "18px",
  },
  tablist: {
    // перекрашиваем underline у активного таба
    '& .fui-Tab[aria-selected="true"]::after': {
      backgroundColor: "var(--primery-green-color) !important",
    },
  },
});
