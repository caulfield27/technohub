import { makeStyles } from "@fluentui/react";
import { tokens } from "@fluentui/react-components";

export const useFilterDropstyles = makeStyles({
    root: {
        // Stack the label above the field with a gap
        display: "grid",
        gridTemplateRows: "repeat(1fr)",
        justifyItems: "start",
        gap: "2px",
        width: "120px",
    },
    dropdown: {
        minWidth: '100px !important',
        maxWidth: '110px !important'
    }
});
