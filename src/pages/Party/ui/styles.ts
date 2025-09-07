import { makeStyles } from "@fluentui/react";
import { tokens } from "@fluentui/react-components";

export const useDrawerStyles = makeStyles({
  root: {
    minWidth: "520px",
  },
  drawerHeader: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  drawerBody: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalM,
    padding: tokens.spacingVerticalS,
  },

  categoryField: {
    display: "flex",
    flexDirection: "row",
  },
  fieldRow: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: tokens.spacingHorizontalS,
    alignItems: "center",
  },

  fieldGroup: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingHorizontalS,
  },

  productsLabel: {
    fontWeight: "bold",
  },

  productsGrid: {
    display: "grid",
    gap: tokens.spacingVerticalS,
  },
  productRow: {
    marginBottom: "25px",
    marginTop: "5px",
    paddingTop: "5px",
    borderTop: "2px solid #e1dfdd",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: tokens.spacingHorizontalS,
    alignItems: "center",
  },
  actions: {
    width: "100%",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    gap: tokens.spacingHorizontalM,
  },
  error: {
    color: "#d13438",
    fontSize: "12px",
    marginTop: "4px",
  },
});

export const usePartyStyles = makeStyles({
  page_title: {
    padding: "12px 0",
  },
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
    '& .fui-Tab[aria-selected="true"]::after': {
      backgroundColor: "var(--primery-green-color) !important",
    },
  },
  filters: {
    marginBottom: "21px",
    display: "flex",
    alignItems: "center",
    justifyContent: 'space-between',
    gap: "50px",
  },
  filter_price: {
    display: "flex",
    alignItems: "center",
    gap: "7px",
  },
  input_price: {
    width: "82px",
  },
  dropdowns: {
    display: "flex",
    alignItems: "center",
  },
});
