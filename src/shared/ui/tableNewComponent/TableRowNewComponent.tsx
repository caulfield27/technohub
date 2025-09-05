import { TableRow } from "@fluentui/react-components";
import {
    ChevronDown12Regular,
    ChevronUp12Regular,
} from "@fluentui/react-icons";
import { type CSSProperties, type ReactNode } from "react";
import { useTableStyles } from "./styles";

interface ITableRowNewComponent {
    style?: CSSProperties;
    children: ReactNode;
    expandedRowContent?: ReactNode;
    expandedRow?: number;
    toggleRow?: (index: number) => void;
    idx?: number;
    onClick?: any;
    arrowPosition?: string;
}

const TableRowNewComponent = ({
    style,
    onClick,
    children,
    expandedRowContent,
    expandedRow,
    idx,
    toggleRow,
    arrowPosition,
}: ITableRowNewComponent) => {
    const styles = useTableStyles();
    const isExpanded = expandedRow === idx;
    const onRowClick = () => {
        if (onClick) {
            onClick();
        }
        if (toggleRow) {
            toggleRow(idx);
        }
    };
    return (
        <>
            <TableRow
                as="tr"
                style={{
                    ...style,
                }}
                className={styles.table_row}
                onClick={() => onRowClick()}
            >
                {/* {arrowPosition === "left" && expandedRowContent && (
          <td className={styles.chevron}>
            {isExpanded ? <ChevronUp12Regular /> : <ChevronDown12Regular />}
          </td>
        )} */}
                {children}
                {arrowPosition !== "left" && expandedRowContent && (
                    <td className={styles.chevron}>
                        {isExpanded ? <ChevronUp12Regular /> : <ChevronDown12Regular />}
                    </td>
                )}
            </TableRow>
            {expandedRow != undefined && isExpanded && (
                // <TableRow as="tr" className={styles.expanded_row}>
                <>{expandedRowContent}</>
                // <TableCell as="td" />
                // </TableRow>
            )}
        </>
    );
};

export default TableRowNewComponent;
