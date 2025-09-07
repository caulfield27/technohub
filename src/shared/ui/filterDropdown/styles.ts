import { makeStyles } from "@fluentui/react";

export const useFilterDropstyles = makeStyles({
    root: {
        display: "grid",
        gridTemplateRows: "repeat(1fr)",
        justifyItems: "start",
        gap: "2px",
        width: "120px",
    },
    dropdown: {
        minWidth: '100px !important',
        maxWidth: '150px !important',
        display:'flex'
    }
});
