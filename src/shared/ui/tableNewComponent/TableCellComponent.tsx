import { TableCell } from "@fluentui/react-components";
import { memo, type CSSProperties, type ReactNode } from "react";

interface ITableData {
    children: ReactNode;
    style?: CSSProperties;
    colSpan?: number;
}

const TableCellComponent = memo(({ children, style, colSpan }: ITableData) => {
    return (
        <TableCell
            style={style != undefined ? style : {}}
            colSpan={colSpan}
            aria-colspan={colSpan}
        >
            {children}
        </TableCell>
    );
});

export default TableCellComponent;

TableCellComponent.displayName = "MemoizedTableCellComponent";
