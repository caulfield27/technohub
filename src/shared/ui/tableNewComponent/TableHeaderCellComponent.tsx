import { TableHeaderCell } from "@fluentui/react-components";
import { useTableStyles } from "./styles";
// import classNames from "classnames";
import { type CSSProperties, type ReactNode } from "react";

interface ITableHeaderCellComponent {
    children: ReactNode;
    leftBorder?: boolean;
    rightBorder?: boolean;
    style?: CSSProperties;
    onClick?: () => void;
}

const TableHeaderCellComponent = ({
    children,
    leftBorder,
    rightBorder,
    style,
    onClick,
}: ITableHeaderCellComponent) => {
    const styles = useTableStyles();
    return (
        <TableHeaderCell
            as="th"
            style={style != undefined ? style : { width: "100%" }}
            className={onClick != undefined ? styles.headerCell_hover : ''}
            onClick={onClick}
        >
            <div
                style={{ width: "100%" }}
                // className={classNames(
                //     leftBorder && styles.leftBorder,
                //     rightBorder && styles.rightBorder
                // )}
            >
                {children}
            </div>
        </TableHeaderCell>
    );
};

export default TableHeaderCellComponent;
