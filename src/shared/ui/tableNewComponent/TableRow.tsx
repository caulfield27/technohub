import { TableCell, TableRow } from "@fluentui/react-components";
import { ChevronUp12Regular } from "@fluentui/react-icons";
import { ChevronDown12Regular } from "@fluentui/react-icons/lib/fonts";
import React, { type CSSProperties, type ReactNode } from "react";
import { useTableStyles } from "./styles";

interface ITableRow {
    children: ReactNode;
    style?: CSSProperties | any;
    expandedRowContent?: ReactNode;
    expandedRow?: number;
    toggleRow?: (index: number) => void;
    idx?: number;
    expandAll?: boolean;
    aria_rowindex?: number;
    onKeyDown?: any;
    onClick?: any;
    appearance?: "none" | "brand" | "neutral";
    classname?: string;
}

const TableRowComponent = ({
    children,
    style,
    expandedRowContent,
    expandedRow,
    toggleRow,
    idx,
    aria_rowindex,
    onKeyDown,
    onClick,
    appearance,
    classname,
}: ITableRow) => {
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
                aria-rowindex={aria_rowindex}
                onKeyDown={onKeyDown}
                onClick={() => onRowClick()}
                appearance={appearance}
                className={classname}
            >
                {children}
                {expandedRowContent && (
                    <td className={styles.chevron}>
                        {isExpanded ? (
                            <>
                                <ChevronUp12Regular />
                            </>
                        ) : (
                            <ChevronDown12Regular />
                        )}
                    </td>
                )}
            </TableRow>
            {expandedRow != undefined && isExpanded && (
                <TableRow as="div" className={styles.expanded_row}>
                    {expandedRowContent}
                    <TableCell as="div" />
                </TableRow>
            )}
        </>
    );
};

export default React.memo(TableRowComponent);

TableRowComponent.displayName = "MemoizedTableRowComponent";
